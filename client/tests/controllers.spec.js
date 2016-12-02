describe('Test of navbarCtrl', function () {
    var $controller;
    var $scope;
    var navbarCtrl;
    beforeEach(module('cleveroad'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $scope = _$rootScope_;
        navbarCtrl = $controller('navbarCtrl', {
            $scope: $scope
        });
    }));

    describe('Navbar Controller', function () {
        it('Navbar controller isLogin should be false', function () {
            expect($scope.isLogin).toBe(false);
            expect($scope.userEmail).toEqual('');
        });

        it('Navbar Controller logout should be a function', function () {
            expect(typeof $scope.logout).toBe('function');
        });

        it('Navbar Controller goToSettings should be a function', function () {
            expect(typeof $scope.goToSettings).toBe('function');
        });
    })
});


describe('Test of settingsCtrl', function () {
    var $controller;
    var $scope;
    var settingsCtrl;
    beforeEach(module('cleveroad'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $scope = _$rootScope_;
        settingsCtrl = $controller('settingsCtrl', {
            $scope: $scope
        });
    }));

    describe('Settings Controller', function () {
        it('Settings controller user should be undefind', function () {
            expect($scope.user).toBe(undefined);
            expect(angular.equals($scope.password, {})).toBe(true);
        });

        it('Settings Controller changePasswordMode should be a undefind and true after as invoke openChangePasswordForm()', function () {
            expect($scope.changePasswordMode).toBe(undefined);
            expect(typeof $scope.openChangePasswordForm).toBe('function');
            $scope.openChangePasswordForm();
            expect($scope.changePasswordMode).toBe(true);
        });

        it('Settings Controller closeChangePassportMode should be a function', function () {
            expect(typeof $scope.closeChangePassportMode).toBe('function');
        });

        it('Settings Controller changePasswordMode should be a false after invoke of closeChangePassportMode()', function () {
            expect(typeof $scope.closeChangePassportMode).toBe('function');
            $scope.closeChangePassportMode();
            expect($scope.changePasswordMode).toBe(false);
            expect(angular.equals($scope.password, {})).toBe(true);
        });

        it('Settings Controller user and password should be an empty objects after invoke of cancelChanges()', function () {
            expect(typeof $scope.cancelChanges).toBe('function');
            $scope.cancelChanges();
            expect(angular.equals($scope.user, {})).toBe(true);
            expect(angular.equals($scope.password, {})).toBe(true);
        });
    })
});


describe('Test of goodsCtrl', function () {
    var $controller;
    var $scope;
    var settingsCtrl;
    beforeEach(module('cleveroad'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $scope = _$rootScope_;
        settingsCtrl = $controller('goodsCtrl', {
            $scope: $scope
        });
    }));

    describe('goodsCtrl Controller', function () {
        it('goodsCtrl controller arrayForDelete should be empty array', function () {
            expect(angular.equals($scope.arrayForDelete, [])).toBe(true);
        });

        it('goodsCtrl Controller setAddMode should be a function', function () {
            expect($scope.addMode).toBe(false);
            expect(typeof $scope.setAddMode).toBe('function');
            $scope.setAddMode(true);
            expect($scope.addMode).toBe(true);
        });

        it('goodsCtrl Controller cancelAddProduct should be a function', function () {
            expect(typeof $scope.cancelAddProduct).toBe('function');
            $scope.cancelAddProduct();
            expect($scope.addMode).toBe(false);
            expect(angular.equals($scope.newProduct, {})).toBe(true);

        });

        it('goodsCtrl Controller pushToArrayForDelete should be a function', function () {
            expect(typeof $scope.cancelAddProduct).toBe('function');
            expect(angular.equals($scope.arrayForDelete, [])).toBe(true);
            var product = {};
            product.deleteThis = true;
            $scope.pushToArrayForDelete(product);
            expect($scope.arrayForDelete.length).toEqual(1);
            product.deleteThis = false;
            $scope.pushToArrayForDelete(product);
            expect($scope.arrayForDelete.length).toEqual(0);
        });
     })
});



