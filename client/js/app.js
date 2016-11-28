var app = angular.module('cleveroad', []);

app.directive('navbar', [function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/navbar.html',
        scope: {}
    }
}]);

app.directive('register', [function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/register.html',
        scope: {}
    }
}]);

