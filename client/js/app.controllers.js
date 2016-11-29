angular.module('cleveroad')
    .controller('AppCtrl',['Auth', '$scope', '$rootScope', function (Auth, $scope, $rootScope) {

    }]);

angular.module('cleveroad')
    .controller('navbarCtrl',['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.$on('user-registered', function (event, args) {
            $scope.isLogin = args.isLogin;
            $scope.userEmail = args.userEmail;
        });
    }]);

angular.module('cleveroad')
    .controller('registerCtrl', ['registerService', '$scope', '$rootScope', function (registerService, $scope, $rootScope) {
       $scope.userObj = {};
       $scope.doRegister = function (userObj) {
           delete userObj.password2;
           return registerService.doRegister(userObj)
               .success(function (response) {
                   $rootScope.$broadcast('user-registered', {data: {
                       userEmail: response._id,
                       isLogin: true
                   }});
               })
               .error(function (response) {
                   if (response && response.error) {
                       $scope.error = response.error;
                   }
               })
       }
    }]);
