(function() {
    'use strict';
    
    angular
        .module('app')
        .config(Routes);
    
    Routes.$inject = ['$routeProvider'];
    function Routes($routeProvider) {

        $routeProvider.
             when('/', {
               templateUrl: 'templates/main/main.html',
               controller:  'MainCtrl',
               controllerAs: 'main'
             }).
            when('/contact/', {
                   templateUrl: 'templates/main/contact.html',
                   controller:  'ContactCtrl',
                   controllerAs: 'contact'
                 }).
             otherwise({
             });
    }
    
})();