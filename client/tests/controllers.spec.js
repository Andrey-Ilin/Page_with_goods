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
        settingsCtrl = $controller('navbarCtrl', {
            $scope: $scope
        });
    }));

    describe('Settings Controller', function () {
        it('Settings controller user should be undefind', function () {
            expect($scope.user).toBe(undefined);
        });

        it('Settings Controller changePasswordMode should be a undefind', function () {
            expect($scope.changePasswordMode).toBe(undefined);
            $scope.openChangePasswordForm();
            expect($scope.changePasswordMode).toBe(true);
        });

        it('Navbar Controller goToSettings should be a function', function () {
            expect(typeof $scope.goToSettings).toBe('function');
        });
    })
});

