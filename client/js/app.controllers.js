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
        };

        $scope.goToSettings = function () {
            $location.path('/settings')
        }
    }]);


angular.module('cleveroad')
    .controller('settingsCtrl',['$rootScope', '$scope', 'loginService', '$location', 'Auth', 'settingsService', function ($rootScope, $scope, loginService, $location, Auth, settingsService) {
        $scope.user = $rootScope.user;
        $scope.password = null;
        $scope.password2 = null;

        $scope.openChangePasswordForm = function () {
            $scope.changePasswordMode = true;
        };

        $scope.closeChangePassportMode = function () {
            $scope.changePasswordMode = false;
            $scope.password = null;
            $scope.password2 = null;
        };

        $scope.cancelChanges = function () {
            $scope.user = {};
            $location.path('/goods');
        };

        $scope.changeUserSettings = function (user) {
           return settingsService.changeSettings(user, user._id)
               .then(function (response) {
                   $rootScope.user = response.data;
                   $scope.user = $rootScope.user;
               })
        };

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
        $scope.addMode = false;
        $scope.arrayForDelete = [];

        $scope.setAddMode = function (value) {
            $scope.addMode = value;
        };

        $scope.cancelAddProduct = function () {
            $scope.setAddMode(false);
            $scope.newProduct = {};
        };

        $scope.pushToArrayForDelete = function (product) {
          if (product.deleteThis) {
              $scope.arrayForDelete.push(product);
          } else {
              var index =  $scope.arrayForDelete.indexOf(product);
              $scope.arrayForDelete.splice(index, 1);
          }
        };
        
        $scope.removeProducts = function (arrayOfProducts) {
            arrayOfProducts.forEach(function (product) {
                return goodsService.removeProduct(product._id)
                    .then(function () {
                        var index =  $scope.arrayForDelete.indexOf(product);
                        $scope.arrayForDelete.splice(index, 1);
                        getProducts();
                    });
            });
        };

        $scope.showAbout = function (product) {
            $scope.showAboutMode = true;
            $scope.product = product;
        };

        $scope.goToFromAbout = function () {
            $scope.showAboutMode = false;
            $scope.product = {};
        };

        $scope.setEditProductMode = function (product) {
            $scope.product = {};
            $scope.product = product;
            $scope.editProductMode = true;
            $scope.showAboutMode = true;
        };

        $scope.cancelEditProduct = function () {
            $scope.product = {};
            $scope.editProductMode = false;
            $scope.showAboutMode = false;
        };

        var getProducts = function () {
            return goodsService.getProducts()
                .then(function (response) {
                    $scope.productList = response.data;
                })
        };

        getProducts();

        $scope.addProduct = function (newProduct) {
            return goodsService.addProduct(newProduct)
                .then(function (response) {
                    $scope.productList.push(response.data);
                    $scope.setAddMode(false);;
                })
        };

        $scope.editProduct = function (product) {
            return goodsService.editProduct(product, product._id)
                .then(function (response) {
                    $scope.product = {};
                    $scope.editProductMode = false;
                    $scope.showAboutMode = false;
                })
        }
    }]);
