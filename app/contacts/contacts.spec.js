describe('ContactsControllerTest', function () {

    beforeEach(module('ngRoute', 'tooltip', 'ngMaterial',
                      modules.services, 
                      modules.directives, 
                      modules.filters, 
                      modules.contacts,
                      modules.info));

    var $document, $controller, $notification, $compile, $rootScope;

    beforeEach(inject(function(_$document_, _$rootScope_, _$controller_, _$notification_, _$compile_){
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $notification = _$notification_;
        $compile = _$compile_;
    }));

    /******************* bloco de teste para verificação se funções são definidas ***********************/
    describe('--> exists function', function () {
        
        it("deve existir o método 'init()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('ContactsController', { $scope: $scope });
            expect($scope.init).toBeDefined();
		});	

        it("deve existir o método 'goToDetails()' ", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('ContactsController', { $scope: $scope });
            expect($scope.goToDetails).toBeDefined();
        }); 

        it("deve existir o método 'create()' ", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('ContactsController', { $scope: $scope });
            expect($scope.create).toBeDefined();
        }); 
	});
});