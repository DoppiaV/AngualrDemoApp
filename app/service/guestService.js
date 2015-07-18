'use strict';

angular.module('guestServiceModule',[])
    .factory('guestService', ['$timeout','$q', 'userService', function ($timeout, $q, userService) {
    
        var api = {
            login: login
        };

        function login(user)
        {
            console.log('chiamata al servizio Login'+angular.toJson(user, true));
            var d = $q.defer();

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
                        d.resolve();
                    }
                    else
                    {
                    console.log('reject');
                        d.reject();
                    }
                },
                5000
            );

            return d.promise;
        }

        return api;
    }]);
