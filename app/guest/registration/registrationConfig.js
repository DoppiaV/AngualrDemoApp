'use strict';

angular.module('registrationModule', []) //dichiaro il modulo

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when(
            '/registration',
            {
                templateUrl: 'guest/registration/registration.html',
                controller: 'registrationController'
            }
        )
    }]);



