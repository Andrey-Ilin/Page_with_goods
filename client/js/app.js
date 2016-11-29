var app = angular.module('cleveroad', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl:'templates/home.html'
        })
        .when('/users/login', {
            template: '<login></login>'
        })
        .when('/404', {
            templateUrl: 'templates/404.html'
        })
        .when('/users/register', {
            template: '<register></register>'
        })
        .when('/goods', {
            template: '<goods></goods>',
            resolve: {
                check: function ($q, Auth) {
                var defer = $q.defer();
                if (Auth.getIsLogin()) {
                    return defer.resolve;
                } else {
                    defer.reject('not_logged_in')
                }
                return defer.promise;
            }}
        })
        .otherwise({ redirectTo: '/404' });
});



