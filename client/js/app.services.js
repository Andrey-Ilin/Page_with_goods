angular.module('cleveroad').factory('registerService', ['$http', function ($http) {
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
}]);

angular.module('cleveroad').factory('loginService', ['$http', function ($http) {
    var doLogin = function (userDTO) {
        return $http({
            method: 'POST',
            url: '/api/v1/login',
            data: userDTO
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
}]);

angular.module('cleveroad').factory('goodsService', ['$http', function ($http) {
    var getProducts = function () {
        return $http({
            method: 'GET',
            url: '/api/v1/goods'
        })
    };

    var addProduct = function (newProductDTO) {
        return $http({
            method: 'POST',
            url: '/api/v1/goods',
            data: newProductDTO
        })
    };

    return {
        getProducts: getProducts,
        addProduct: addProduct
    }
}]);

angular.module('cleveroad').factory('htmlValidationRulesMapService', function() {

    var patterns = {
        number: '^[0-9]+$',
        name: '^[^:]+$', // prevent from entering ':' in the names as per QB business rules. See https://antibex.myjetbrains.com/youtrack/issue/ACM-537
        amount: '^[0-9]+([\.][0-9]+)?$',
        email: '^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$',
        multipleEmails: '^(([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9}))*([,;][\s]*(([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})))*$',
        invoiceNumber: '^[a-zA-Z0-9_]*$',
        billingPlanPrice: '^[0-9]+(\\.[0-9]+)?$'
    };

    return {
        'patterns': patterns,

        // Case-File fields
        'case-file-id': {
            maxlength: 128
        },
        'case-file-name': {
            required: true,
            maxlength: 256
        },
        'case-file-type': {
            maxlength: 128
        },
        'document-name': {
            required: true,
            maxlength: 256
        },
        'document-type': {
            maxlength: 128
        },

        // Contacts Fiels
        'contact-note': {
            maxlength: 2000
        },
        'contact-organization-name': {
            maxlength: 500
        },
        'contact-phone': {
            maxlength: 50
        },
        // Organization fields
        'org-name': {
            required: true,
            maxlength: 150
        },
        'org-domain': {
            maxlength: 2000
        },
        'org-phone': {
            maxlength: 15
        },
        // Facility Branch fields
        'facility-branch-name': {
            required: true,
            maxlength: 256
        },
        'facility-branch-phone': {
            maxlength: 50
        },
        'facility-branch-email': {
            maxlength: 100,
            pattern: patterns.email
        },
        'facility-branch-url': {
            maxlength: 2000
        },
        'facility-branch-address': {
            maxlength: 300
        },
        // Profile fields
        'profile-email-update-email': {
            required: true,
            maxlength: 100,
            pattern: patterns.email
        },
        'profile-email-update-password': {
            required: true
        },
        'profile-name-update-first-name': {
            maxlength: 128,
            pattern: patterns.name
        },
        'profile-name-update-second-name': {
            maxlength: 128,
            pattern: patterns.name
        },
        'profile-password-update-current': {
            required: true
        },
        'profile-password-update-new': {
            required: true
        },
        'profile-password-update-confirm': {
            required: true
        },
        // Auth forms
        'auth-login-email': {
            required: true,
            maxlength: 100,
            pattern: patterns.email
        },
        'auth-login-password': {
            required: true
        },
        'auth-create-account-email': {
            required: true,
            maxlength: 100,
            pattern: patterns.email
        },
        'auth-create-account-first-name': {
            maxlength: 128,
            pattern: patterns.name
        },
        'auth-create-account-last-name': {
            maxlength: 128,
            pattern: patterns.name
        },
        'auth-register-confirm-password': {
            required: true
        },
        'auth-register-confirm-password-retype': {
            required: true
        },
        'auth-forgot-password-email': {
            required: true,
            maxlength: 100,
            pattern: patterns.email
        },
        'auth-change-email-password': {
            required: true
        },
        'billing-merchant-account-id': {
            required: true,
            maxlength: 20,
            pattern: patterns.number
        },
        'billing-merchant-payment-provider': {
            required: true,
            maxlength: 100
        },
        'billing-currency': {
            required: true,
            maxlength: 3
        },
        'billing-merchant-url': {
            maxlength: 2000
        },
        'billing-merchant-first-data-validation': {
            maxlength: 16
        },
        'billing-plan-name': {
            required: true
        },
        'billing-price-plan-storage-limit': {
            required: true,
            pattern: patterns.number,
            min: 1,
            maxlength: 5
        },
        'billing-price-plan-upload-limit': {
            required: true,
            pattern: patterns.number,
            min: 1,
            maxlength: 5
        },
        'billing-plan-price': {
            required: true,
            pattern: patterns.billingPlanPrice,
            maxlength: 9
        },
        'billing-price-plan-member-limits': {
            required: true,
            pattern: patterns.number,
            min: 1
        },
        //Billing History Add Metadata popup fields
        'billing-history-invoice-date': {
            required: true
        },
        'billing-history-invoice-number': {
            required: true,
            pattern: patterns.invoiceNumber,
            maxlength: 10
        },
        'billing-history-paid-status': {
            required: true,
            maxlength: 15
        },
        'billing-history-amount': {
            required: true,
            maxlength: 10,
            pattern: patterns.amount
        },

        // Credit Card fields
        'credit-card-date': {
            required: true,
            maxlength: 2,
            pattern: patterns.number
        },
        'credit-card-cvd': {
            maxlength: 4,
            pattern: patterns.number,

            // CVD is optional (First Data API Integration PDF)
            required: false
        },
        'credit-card-number': {
            required: true,
            pattern: patterns.number,
            maxlength: 20
        },
        'credit-card-owner':{
            minlength: 4,
            maxlength: 64,
            pattern: patterns.name,
            required: true
        },

        // New Charge Fields
        'charge-credit-card-owner': {
            minlength: 4,
            maxlength: 64
        },
        'charge-address-street': {
            maxlength: 64
        },
        'charge-address-city': {
            maxlength: 32
        },
        'charge-address-postal-code': {
            maxlength: 16
        },
        'charge-customer-name': {
            pattern: patterns.name,
            maxlength: 64
        },
        'charge-customer-phone': {
            maxlength: 50
        },
        'charge-customer-account-number': {
            maxlength: 255
        },
        'charge-customer-invoice-number': {
            maxlength: 21
        },
        'charge-amount': {
            required: true,
            maxlength: 9,
            pattern: patterns.amount
        },

        // Client Portal Fields

        // Add Payment
        'payment-address-city': {
            maxlength: 64,
            required: true
        },
        'payment-address-city-admin': {
            maxlength: 64,
        },
        'payment-address-street': {
            maxlength: 100,
            required: true
        },
        'payment-address-street-admin': {
            maxlength: 100,
        },
        'payment-address-country': {
            maxlength: 100,
            required: true
        },
        'payment-address-country-admin': {
            maxlength: 100,
        },
        'payment-address-province': {
            maxlength: 30,
            required: true
        },
        'payment-address-province-admin': {
            maxlength: 30,
        },
        'payment-address-postal-code': {
            maxlength: 10,
            required: true
        },
        'payment-address-postal-code-admin': {
            maxlength: 10,
        },
        'payment-email': {
            maxlength: 100,
            pattern: patterns.email
        },

        // Bill To
        'bill-to-name': {
            maxlength: 500,
            required: true,
            pattern: patterns.name
        },
        'bill-to-street': {
            maxlength: 100
        },
        'bill-to-city': {
            maxlength: 64
        },
        'bill-to-province': {
            maxlength: 30
        },
        'bill-to-postal-code': {
            maxlength: 10
        },
        'bill-to-country': {
            maxlength: 100
        },
        'bill-to-phone': {
            maxlength: 50
        },

        // UO Subscriptions
        'lrs-business-name': {
            required: true,
            maxlength: 255
        },
        'lrs-alias': {
            maxlength: 50
        },
        'uo-account-number': {
            required: true,
            pattern: patterns.number,
            maxlength: 6
        },
        'uo-first-last-name': {
            maxlength: 25,
            pattern: patterns.name,
            required: true
        },
        'uo-qb-customer-display-name': {
            required: true,
            maxlength: 100
        },
        'uo-qb-company-name': {    // Must be added to Wiki!!!
            minlength: 1,
            maxlength: 100,
            required: true,
            pattern: patterns.name
        },
        'uo-expiry-date': {
            required: true
        },
        'uo-bill-to-street': {
            maxlength: 100,
            required: true
        },
        'uo-bill-to-city': {
            maxlength: 64,
            required: true
        },
        'uo-bill-to-province': {
            maxlength: 30,
            required: true
        },
        'uo-bill-to-postal-code': {
            maxlength: 10,
            required: true
        },
        'uo-bill-to-country': {
            maxlength: 100,
            required: true
        },
        'uo-bill-to-phone': {
            maxlength: 50
        },
        'uo-bill-to-fax': {
            maxlength: 50
        },
        'uo-bill-to-email': {
            required: true,
            maxlength: 100,
            pattern: patterns.multipleEmails
        },
        'uo-discount-description': {
            required: true,
            maxlength: 100
        },
        'uo-discount-rate': {
            required: true,
            maxlength: 3,
            pattern: patterns.number
        }
    }
});


angular.module('cleveroad').factory('htmlValidationService', ['htmlValidationRulesMapService', function(htmlValidationRulesMap) {
    var _findRules = function (controlName) {
        return angular.copy(htmlValidationRulesMap[controlName] || {});
    };

    return {
        getRules: _findRules
    };
}]);

angular.module('cleveroad').factory('Auth', ['$rootScope', '$q', function ($rootScope, $q) {
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
