angular.module('cleveroad')
    .controller('AppCtrl',['Auth', '$scope', '$rootScope', '$location', function (Auth, $scope, $rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(evt,current,previous,rejection){
            if(rejection == "not_logged_in"){
                $location.path('/users/login');
            } else {

            }
        });

    }]);

angular.module('cleveroad')
    .controller('navbarCtrl',['$rootScope', '$scope', 'loginService', '$location', 'Auth', function ($rootScope, $scope, loginService, $location, Auth) {
        $scope.isLogin = false;
        $scope.userEmail = '';
        $rootScope.$on('user-registered', function (event, args) {
            $scope.isLogin = args.data.isLogin;
            $scope.userEmail = args.data.userEmail;
        });
        $rootScope.$on('user-login', function (event, args) {
            $scope.isLogin = args.data.isLogin;
            $scope.userEmail = args.data.userEmail;
        });

        $scope.logout = function () {
            return loginService.doLogout()
                .then(function (response) {
                    $scope.isLogin = false;
                    $scope.userEmail = '';
                    Auth.setIsLogin(false);
                    $location.path('/');
                });
        }
    }]);

angular.module('cleveroad')
    .controller('registerCtrl', ['registerService', '$scope', '$rootScope', '$location', 'Auth', function (registerService, $scope, $rootScope, $location, Auth) {
       $scope.userObj = {};
       $scope.doRegister = function (userObj) {
           delete userObj.password2;
           return registerService.doRegister(userObj)
               .success(function (response) {
                   $rootScope.$broadcast('user-registered', {data: {
                       userEmail: response.email,
                       isLogin: true
                   }});
                   $rootScope.user = response;
                   Auth.setIsLogin(true);
                   $location.path('/goods');
               })
               .error(function (response) {
                   if (response && response.error) {
                       $scope.error = response.error;
                   }
               })
       }
    }]);

angular.module('cleveroad')
    .controller('loginCtrl', ['loginService', '$scope', '$rootScope', '$location', 'Auth', function (loginService, $scope, $rootScope, $location, Auth) {
        $scope.credentials = {};
        $scope.credentials.rememberMe = false;
        $scope.doLogin = function (credentialsObj) {
            return loginService.doLogin(credentialsObj)
                .success(function (response) {
                    $rootScope.$broadcast('user-login', {data: {
                        userEmail: response.email,
                        isLogin: true
                    }});
                    $rootScope.user = response;
                    Auth.setIsLogin(true);
                    $location.path('/goods')
                })
        }
    }]);

angular.module('cleveroad')
    .controller('goodsCtrl', ['$scope', 'goodsService', function ($scope, goodsService) {
        $scope.productList = [];

        var getProducts = function () {
            return goodsService.getProducts()
                .then(function (response) {
                    console.log(response)
                })
        };

        getProducts();

        $scope.addProduct = function (newProduct) {
            return goodsService.addProduct(newProduct)
                .then(function (response) {
                    $scope.productList.push(response.data)
                })
        }
    }]);
