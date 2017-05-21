/**
 * @function Formatação de data
 * @author julio_c.silva@outlook.com
 * @since 29/10/2016
 * @returns
 */
(function () {
    
    'use strict';

    angular
        .module(modules.filters)
        .filter('moment', filterMoment);        

    function filterMoment() {
        return function (value, fmt, iso) {
            if (value) {
                if(iso)
                    return moment(new Date(value)).format(fmt || 'DD/MM/YYYY');
                else
                    return moment(value).format(fmt || 'DD/MM/YYYY');
            }
            else {
                return '';
            }
        }
    }
})();



