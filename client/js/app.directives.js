angular.module('cleveroad')
    .directive('navbar', [function () {
        return {
            restrict: 'E',
            controller: 'navbarCtrl',
            templateUrl: 'templates/directives/navbar.html',
            scope: {}
        }
    }])
    .directive('login', [function () {
        return {
            restrict: 'E',
            controller: 'loginCtrl',
            templateUrl: 'templates/directives/login.html',
            scope: {}
        }
    }])
    .directive('register', [function () {
        return {
            restrict: 'E',
            controller: 'registerCtrl',
            templateUrl: 'templates/directives/register.html',
            scope: {}
        }
    }])
    .directive('settings', [function () {
        return {
            restrict: 'E',
            controller: 'settingsCtrl',
            templateUrl: 'templates/directives/settings.html',
            scope: {}
        }
    }])
    .directive('goods', [function () {
        return {
            restrict: 'E',
            controller: 'goodsCtrl',
            templateUrl: 'templates/directives/goods.html',
            scope: {}
        }
    }])
    .directive('format', ['$filter', function ($filter) {
        return {
            require: '?ngModel',
            link: function (scope, elem, attrs, ctrl) {
                if (!ctrl) return;

                ctrl.$formatters.unshift(function (a) {
                    return $filter(attrs.format)(ctrl.$modelValue)
                });

                elem.bind('blur', function (event) {
                    var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
                    elem.val($filter(attrs.format)(plainNumber));
                });
            }
        };
    }])
    .directive('equals', function () {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, elem, attrs, ngModel) {
                if (!ngModel) return;
                scope.$watch(attrs.ngModel, function () {
                    validate();
                });
                attrs.$observe('equals', function (val) {
                    validate();
                });
                var validate = function () {
                    var val1 = ngModel.$viewValue;
                    var val2 = attrs.equals;
                    ngModel.$setValidity('equals', !val1 || !val2 || val1 === val2);
                };
            }
        }
    })

    .directive("ehSimple", function () {
        return function (scope, element) {
            element.addClass("plain");
        }
    })
    .directive('firstDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/first.html'
        }
    });
