angular
    .module('angularStore', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		  .when('/store',{
			templateUrl: 'partials/store.html'
		   })
		  .when('/product/:activeSku',{
		  	templateUrl: 'partials/product.html'
		  })
		   .when('/cart',{
		  	templateUrl: 'partials/cart.html'
		  })
		   .otherwise({
		   	  redirectTo: '/store'
		   });
	}]);

