'use strict';

// Declare app level module which depends on views, and components
angular
.module('myApp', [
    'ngRoute',
    'loginModule',
    'registrationModule',
    'homeModule',
    'guestServiceModule',
    'userServiceModule'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}])
.run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(){
		console.log('Route change error');
		$location.url('/login');
	});
}]);
