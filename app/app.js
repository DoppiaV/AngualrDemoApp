'use strict';

//modulo principale dell'applicazione (so che è il modulo principale perchè è quello dichiarato in ng-app nell'index.html
/*
SINTASSI
angular.module('nomemodulo', [array di moduli da cui dipende(anche vuoto)]) <-- CREA un modulo
angular.module('nomemodulo') <-- legge un modulo istanziato
NB tra leggere un modulo e crearlo la differenza risiede nell'aggiungere l'array di moduli da cui il modulo dipende!!!!
 */
angular
.module('myApp', //<-- nome modulo
    [               //<-- array di dipendenze, QUINDI sto creando il modulo 'myApp'
        //moduli di angular JS
        'ngRoute', //<-serve per il routing delle view (rende disponibile $routeProvider)
        //moduli definiti da noi per questa applicazione(saranno poi creati da qualche altra parte)
        'loginModule', //
        'registrationModule',
        'homeModule',
        'guestServiceModule',
        'userServiceModule'
    ]
)
/*
con questo config si dice che se il routing non ricade in uno di quelli impostati (dichiarati da qualche altra parte)
allora l'app fa il redirect alla pagina di login
NB i 'config' vengono impostati prima di eseguire effettivamente la ngApp (sono configurazioni statiche della app
 */
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}])
/*
con questo run si fa in modo di eseguire il redirect alla pagina di login nel caso in cui ci sia un errore nel routing
NB VEDI il 'resolve' nel homeConfig.js
*/
.run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(){
		console.log('Route change error');
        //esegue il redirect alla pagina di login
		$location.url('/login');
	});
}]);
