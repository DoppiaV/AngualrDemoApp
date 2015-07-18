'use strict';

angular.module('loginModule')
    .controller('loginController', [ '$scope', 'guestService', '$location', function ($scope, guestService, $location) {

        $scope.login = function(user)
        {
            //alert(angular.toJson(user, true));
            if(user == undefined){
                console.log('undefined user info');
                alert('Undefined user -> fill form info!');
                return;
            }
            console.log('controller login call'+angular.toJson(user,true));
            guestService.login(user).then(
                function() {
                    $location.url('/home');
                },
                function() {
                    alert('ERRORE LOGIN');
                }

            );

        }
       
    }]);
