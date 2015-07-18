'use strict';

angular.module('userServiceModule',[])
    .factory('userService', ['$timeout','$q', function ($timeout, $q) {
    
        var api = {
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
