app.directive('navbar', [function () {
    return {
        restrict: 'E',
        controller: 'navbarCtrl',
        templateUrl: 'templates/directives/navbar.html',
        scope: {}
    }
}]);

app.directive('login', [function () {
    return {
        restrict: 'E',
        controller: 'loginCtrl',
        templateUrl: 'templates/directives/login.html',
        scope: {}
    }
}]);

app.directive('register', [function () {
    return {
        restrict: 'E',
        controller: 'registerCtrl',
        templateUrl: 'templates/directives/register.html',
        scope: {}
    }
}]);

app.directive('goods',[function () {
    return {
        restrict: 'E',
        controller: 'goodsCtrl',
        templateUrl: 'templates/directives/goods.html',
        scope: {}
    }
}]);

app.directive('htmlValidation', ['htmlValidationService', function (htmlValidationService) {
    return {
        restrict: 'A',
        link: function ($scope, $el, attrs) {
            var rules = htmlValidationService.getRules(attrs.htmlValidation);
            Object.keys(rules).forEach(function (key) {
                $el.attr(key, rules[key]);
            })
        }
    };
}]);
