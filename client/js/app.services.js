angular.module('cleveroad')
    .factory('registerService', ['$http', function ($http) {
        var doRegister = function (newUserDTO) {
            return $http({
                method: 'POST',
                url: '/api/v1/register',
                data: newUserDTO
            })
        };

        return {
            doRegister: doRegister
        }
    }])

    .factory('loginService', ['$http', function ($http) {
        var doLogin = function (userDTO) {
            return $http({
                method: 'POST',
                url: '/api/v1/login',
                data: userDTO,
                transformResponse: function (data, headers) {
                    var user = JSON.parse(data);
                    delete user.password;
                    return user;
                }
            })
        };

        var doLogout = function () {
            return $http({
                method: 'GET',
                url: '/api/v1/logout'
            })
        };

        return {
            doLogin: doLogin,
            doLogout: doLogout
        }
    }])

    .factory('settingsService', ['$http', function ($http) {
        var changeSettings = function (userDTO, id) {
            return $http({
                method: 'PUT',
                url: '/api/v1/settings/' + id,
                data: userDTO,
                transformRequest: function (user) {
                    delete user._id;
                    var userDTO = JSON.stringify(user);
                    return userDTO;
                },
                transformResponse: function (data, headers) {
                    var user = JSON.parse(data);
                    delete user.password;
                    return user;
                }
            })
        };

        var changePassword = function (password, id) {
            return $http({
                method: 'PUT',
                url: '/api/v1/settings/password/' + id,
                data: password,
                transformResponse: function (data, headers) {
                    var user = JSON.parse(data);
                    delete user.password;
                    return user;
                }
            })
        };


        return {
            changeSettings: changeSettings,
            changePassword: changePassword

        }
    }])

    .factory('goodsService', ['$http', function ($http) {
        var getProducts = function () {
            return $http({
                method: 'PUT',     //TODO get method work wrong, maybe something with router
                url: '/api/v1/goods',
                transformResponse: function (data, headers) {
                    var products = JSON.parse(data);
                    products.forEach(function (product) {
                        product.deleteThis = false
                    });
                    return products;
                }
            })
        };

        var removeProduct = function (id) {
            return $http({
                method: 'DELETE',
                url: '/api/v1/goods/' + id
            })
        };


        var addProduct = function (newProductDTO) {
            return $http({
                method: 'POST',
                url: '/api/v1/goods',
                data: newProductDTO
            })
        };

        var editProduct = function (product, id) {
            return $http({
                method: 'PUT',
                url: '/api/v1/goods/' + id,
                data: product,
                transformRequest: function (product) {
                    delete product.deleteThis;
                    delete product._id;
                    product = JSON.stringify(product);
                    return product;
                }
            })
        };

        return {
            getProducts: getProducts,
            addProduct: addProduct,
            removeProduct: removeProduct,
            editProduct: editProduct
        }
    }])

    .factory('Auth', ['$rootScope', '$q', function ($rootScope, $q) {
        var islogin = false;

        var setIsLogin = function (value) {
            islogin = value
        };

        var getIsLogin = function () {
            return islogin;
        };
        return {
            setIsLogin: setIsLogin,
            getIsLogin: getIsLogin
        }
    }]);
