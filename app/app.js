/**
 * @function main module
 * @author julio_c.silva@outlook.com
 * @since 20/05/2017
 * @returns
 */
(function __pipz(){
    
    'use strict';
    
    angular.module(modules.main, ['ngRoute',
      modules.contacts,
      modules.info,
      modules.directives,
      modules.filters,
      modules.services
    ])
    .config(Config);
    
    Config.$inject = ['$locationProvider', '$routeProvider', '$httpProvider', 'RestangularProvider'];
    
    function Config($locationProvider, $routeProvider, $httpProvider, RestangularProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when('/contacts', {
            templateUrl: 'contacts/contacts.html',
            controller: 'ContactsController'
        })
        .when('/contacts/:id', {
            templateUrl: 'info/info.html',
            controller: 'InfoController'
        })
        .otherwise({redirectTo: '/contacts'});

        RestangularProvider.setBaseUrl('https://api.pipz.io/v1/');
        RestangularProvider.setDefaultHeaders({"Authorization": 'Basic ' + btoa("9dd7eb37e0b8f60432803:24c251e29b00366a7c")});
    };
    
})();