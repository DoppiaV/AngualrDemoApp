'use strict';

angular.module('loginModule', []) //dichiaro il modulo	

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when(
		'/login', 
		{
			templateUrl: 'guest/login/login.html',
			controller: 'loginController'
		}
	)
}]);



