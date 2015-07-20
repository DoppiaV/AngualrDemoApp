'use strict';

angular.module('loginModule')//NEL MODULO loginModule (NB non lo sto istanziando, ma ci sto dichiarando un controller)
    /*
    SINTASSI
    .controller('nomeController', ['dipendenza1', ..., 'dipendenzaN', function(dipendenza1, ..., dipendenzaN){}]
     */
    .controller('loginController', [ '$scope', 'guestService', '$location', function ($scope, guestService, $location) {

        //dichiaro una funzione e la assegno allo scope, in questo modo sarà richiamabile dal template!
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
