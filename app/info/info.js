/**
 * @function controller for Info
 * @author julio_c.silva@outlook.com
 * @since 20/05/2017
 * @returns
 */
(function __InfoController(){
    
    'use strict';

    angular.module(modules.info, ['ngRoute', 'tooltip', 'ngMaterial', 'ngMessages', 'ui.utils.masks'])

    .controller('InfoController', InfoController);
    
    InfoController.$inject = ['$scope', '$notification', '$location', '$timeout', 'ContactService', '$mdDialog', '$routeParams']
    
    function InfoController($scope, $notification,  $location, $timeout, ContactService, $mdDialog, $routeParams) {
        $scope.init = function() {
            $scope.errorMsg = false;
            $scope.id = parseInt($routeParams.id);

            if ($scope.id > 0) {
                ContactService.getUser($scope.id).get().then(function(data) {
                    $scope.user = data;
                    $scope.user.unlock = false;
                });
                $scope.edit = true;
            } else {
                $scope.user = {
                    name: undefined,
                    email: undefined,
                    phone: undefined,
                    twitter: undefined,
                    avatar: 'http://www.gravatar.com/avatar/2be979426eb317704fc654311337153b?d=mm&s=',
                    unlock: true
                };
                $scope.edit = false;
            }
        };
        
        $scope.remove = function($event) {
            var confirm = $mdDialog.confirm()
                  .title('Tem certeza que deseja remover o contato?')
                  .textContent($scope.user.name + ": " + $scope.user.twitter)
                  .ariaLabel('Tem certeza que deseja remover o contato?')
                  .targetEvent($event)
                  .ok('Sim')
                  .cancel('Não');
            $mdDialog.show(confirm).then(function() {
                ContactService.updateUser($scope.id).remove().then(function() {
                    $notification.success('Removido com sucesso. Aguarde você será redirecionado');
                    $scope.block = true;
                    $timeout(function() {
                        $location.path("/contacts");
                   }, 3000);
                });
            }, function() {
              //TODO não
            });
        };

        $scope.update = function($event) {
            var user = {
                name: $scope.user.name,
                email: $scope.user.email,
                phone: $scope.user.phone,
                twitter: $scope.user.twitter
            };

            ContactService.updateUser($scope.id).patch(user).then(function(data) {
                $notification.success('Atualizado com sucesso.'); 
                $scope.user.unlock = false;
            },function(error) {
                $notification.error('Erro ao atualizar o contato: ' + data.user_message);
            });
        };

        $scope.save = function($event) {
            var user = angular.copy($scope.user);
            delete user.unlock;

            ContactService.saveUser().post(user).then(function(data) {
               $scope.user = data;
               $notification.success('Salvo com sucesso. Aguarde a página será atualizada');
               $scope.block = true;
               $timeout(function() {
                    $location.path("/contacts/" + $scope.user.id);
               }, 3000);
            }, function(data) {
                $notification.error('Erro ao salvar o contato: ' + data.user_message);
            });
        };

        $scope.back = function() {
            $location.path("/contacts");
        };

        $scope.validate = function($event, form) {
            if (!form || form.$invalid) {
                return;
            }
            if (!$scope.edit) {
                $scope.save($event);
            } else {
                $scope.update($event);
            }
        };
    }; 
})();