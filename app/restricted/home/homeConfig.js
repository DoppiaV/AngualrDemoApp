'use strict';

angular.module('homeModule', []) //dichiaro il modulo	

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when(
		'/home', 
		{
			templateUrl: 'restricted/home/home.html',
			controller: 'homeController',
	        resolve: {
	            authorization: function(userService){
	                return userService.isAuthorized();
	            }
	        }
		}
	)
}]);



