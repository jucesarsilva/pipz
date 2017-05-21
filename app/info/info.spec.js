describe('InfoControllerTest', function () {

    beforeEach(module('ngRoute', 'tooltip', 'ngMaterial', 'ngMaterial', 'ui.utils.masks',
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
			var controller = $controller('InfoController', { $scope: $scope });
            expect($scope.init).toBeDefined();
		});	
        
        it("deve existir o método 'remove()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('InfoController', { $scope: $scope });
            expect($scope.remove).toBeDefined();
		});	
        
        it("deve existir o método 'update()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('InfoController', { $scope: $scope });
            expect($scope.update).toBeDefined();
		});	
        
        it("deve existir o método 'save()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('InfoController', { $scope: $scope });
            expect($scope.save).toBeDefined();
		});	
        
        it("deve existir o método 'back()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('InfoController', { $scope: $scope });
            expect($scope.back).toBeDefined();
		});	
        
        it("deve existir o método 'validate()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('InfoController', { $scope: $scope });
            expect($scope.validate).toBeDefined();
		});
	});
});