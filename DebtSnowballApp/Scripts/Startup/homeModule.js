angular.module('App', [
    'ui.bootstrap',
    'ngCookies',
    'ngRoute',
    'dcSpinnerInterceptor',
    'dcDirectiveModule',
    'formly',
    'formlyBootstrap'
]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    //Index is default route
    $routeProvider.when('/', {
        redirectTo: "/Home/Calculator"
    })

    .when('/Home/Calculator', {
        templateUrl: 'Home/Calculator',
        controllerAs: 'vm',
        controller: 'appCtrl'        
    })

    .otherwise({
        redirectTo: '/'
    });

    // Specify HTML5 mode (using the History APIs) or HashBang syntax.
    $locationProvider.html5Mode(false).hashPrefix('!');
    //$locationProvider.html5Mode(true);

}]);