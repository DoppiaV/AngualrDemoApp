'use strict';

angular.module('homeModule', []) //dichiaro il modulo	

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when(
		'/home', 
		{
            //USA QUESTO TEMPLATE NELLA ng-view....
			templateUrl: 'restricted/home/home.html',
            //CON QUESTO CONTROLLER...
			controller: 'homeController',
            //MA PRIMA, risolvi questa variabile!
            /*
            NB se la variabile viene risolta OK, può essere utilizzata e iniettata come dipendeza nella funzione del controller
            MA se la dipendenza non viene risolta viene emesso un evento $routeChangeError al $rootscope! se non intercettato
            e gestito si ottiene una pagina bianca. (vedi app.js nel blocco .run())
             */
	        resolve: {
	            authorization: function(userService){
	                return userService.isAuthorized();
	            }
	        }
		}
	)
}]);



