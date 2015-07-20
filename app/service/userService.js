'use strict';

/*
SERVICE utilizzato per mantenere le userInfo una volta loggato
NB in questa app demo per convenzione un user è loggato/autorizzato se la variabile userInfo è != undefined
 */

angular
    .module('userServiceModule',[])//CREO UN MODULO userServiceModule SENZA DIPENDENZE (vuoto->[])NEL QUALE.....
    //...CREO UNA FACTORY.....
    .factory('userService', ['$timeout','$q', function ($timeout, $q) {
        //... CHE ESPONE QUESTI METODI(vede 'return' in fondo alla pagina)
        var api = {
            //nomeMetodoEsposto : nomeFunzioneDichiarataQuiSotto
            setUserInfo: setUserInfo,
            getUserInfo: getUserInfo,
            deleteUserInfo: deleteUserInfo,
            isAuthorized : isAuthorized
        };

        var userInfo = undefined;

        function setUserInfo(user)
        {
            userInfo = user;
        }

        function getUserInfo()
        {
            return userInfo;
        }

        function deleteUserInfo()
        {
            userInfo = undefined;
        }

        function isAuthorized()
        {
            var d = $q.defer();

            if(userInfo != undefined)
            {
                d.resolve();
            }
            else
            {
                d.reject();
            }
            return d.promise;
        }

        return api;
    }]);
