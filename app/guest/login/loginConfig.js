'use strict';

angular.module('loginModule', [])//creo il modulo, in questo caso non ci sono dipendenze

//questo modulo gestisce l'url "/login", sostituendo la ng-view in index.html col template impostato qui sotto
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when(
        //quando l'url vale /login....
		'/login', 
		{
            //...metti nella ng-view questo template...
			templateUrl: 'guest/login/login.html',
            //...con questo controller
			controller: 'loginController'
		}
	)
}]);



