/**
 * @function system messages
 * @author julio_c.silva@outlook.com
 * @since 20/05/2017
 * @returns
 */
(function __ContactService() {
    
    'use strict';

    angular
        .module(modules.services)
        .factory('ContactService', ContactService);

    ContactService.$inject = ['Restangular'];

    function ContactService(Restangular) {
        return {
            getContacts: function() { 
                return Restangular.one('contact')
            },
            getUser: function(id) { 
                return Restangular.one('contact', id)
            },
            updateUser: function(id) {
                return Restangular.one('contact', id)
            },
            saveUser: function() {
                return Restangular.all('contact')
            },
            removeUser: function(id) {
                return Restangular.one('contact', id)
            }
        };
    };
})();