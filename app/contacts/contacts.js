/**
 * @function controller for Contacts
 * @author julio_c.silva@outlook.com
 * @since 20/05/2017
 * @returns
 */
(function __ContactsController(){
    
    'use strict';

    angular.module(modules.contacts, ['ngRoute', 'tooltip', 'ngMaterial'])

    .controller('ContactsController', ContactsController);
    
    ContactsController.$inject = ['$scope', '$notification', '$timeout', 'ContactService', '$location']
    
    function ContactsController($scope, $notification, $timeout, ContactService, $location) {
        $scope.init = function(person) {
            ContactService.getContacts().get().then(function(data) {
                $scope.contacts = data.objects;
                $scope.pagination = data.meta;
            });
        };

        $scope.goToDetails = function(person) {
            $location.path("/contacts/" + person.id);
        };

        $scope.create = function(person) {
            $location.path("/contacts/0");
        };
    };
})();