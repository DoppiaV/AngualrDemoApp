'use strict';

/*
SERVICE per gestire le operazioni eseguibili da un utente anonimo (o guest)
 */
angular.module('guestServiceModule',[]) //CREO IL MODULO SENZA DIPENDEZE (vuoto->[])
    //CREO LA FACTORY
    .factory('guestService', ['$timeout','$q', 'userService', function ($timeout, $q, userService) {
        //API ESPOSTE DALLA FACTORY
        //nomeMetodoEsposto : nomeFunzioneDichiarataQuiSotto
        var api = {
            login: login
        };

        function login(user)
        {
            console.log('chiamata al servizio Login'+angular.toJson(user, true));
            //creo la variabile deferita d
            //mi aspetto che il valore non sia calcolato immediatamente ma verrà calcolato in modo asincrono
            var d = $q.defer();

            //SIMULO UNA CHIAMATA AL BACKEND, DOPO 5 secondi restituisce le informazioni dell'utente
            //e risolve la promessa (già restituita al chiamante per non bloccarlo!!!)
            //SINTASSI TIMEOUT -> $timeout(funzionaDaChiamare, millisecondiDopoCuiChiamareLaFunzione)
            $timeout(
                function() {
                    if(user.username == 'simona')
                    {
                        var userDataMock = {
                            username    : 'simona',
                            id          : 4,
                            indirizzo   : 'via ciaociao',
                            numTelefono : '333444555666' 
                        };

                        userService.setUserInfo(userDataMock);
                        console.log('resolve!');
                        //risolvo (positivamente) la promessa
                        d.resolve();
                    }
                    else
                    {
                        console.log('reject');
                        //respingo (risolvo negativamente) la promessa
                        d.reject();
                    }
                },
                5000
            );

            //restituisco la promessa, ovvero una variabile il cui valore verrà settato una volta risolta la promise!
            return d.promise;
        }

        return api;
    }]);
