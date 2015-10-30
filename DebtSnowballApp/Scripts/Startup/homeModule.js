angular.module('App', [
    'ui.bootstrap',
    'ngCookies',
    'ngRoute',
    'dcSpinnerInterceptor',
    'dcDirectiveModule'
]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    //Index is default route
    $routeProvider.when('/', {
        redirectTo: "Home/SampleHomePage/"
    })

    .when('/Account/SampleAccountPage/', {
        templateUrl: 'Account/SampleAccountPage',
        controller: 'appCtrl'
    })


    .when('/Home/SampleHomePage/', {
        templateUrl: 'Home/SampleHomePage',
        controller: 'appCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });

    // Specify HTML5 mode (using the History APIs) or HashBang syntax.
    $locationProvider.html5Mode(false).hashPrefix('!');
    //$locationProvider.html5Mode(true);

}]);