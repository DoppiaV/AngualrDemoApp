'use strict';

angular.module('homeModule')
    .controller('homeController',[ '$scope', 'userService', function ($scope,userService) {

    	$scope.userData = userService.getUserInfo();
       
    }]);
