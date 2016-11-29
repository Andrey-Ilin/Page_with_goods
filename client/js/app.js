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
        .when('/users/register', {
            template: '<register></register>'
        })
        .otherwise({ redirectTo: '/' });
});



