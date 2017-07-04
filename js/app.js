var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	
		$routeProvider
			.when('/', { templateUrl: 'template/login.html'})
			.when('/listaProdutos', { templateUrl: 'template/listaProdutos.html'})
			.when('/controller', { templateUrl: 'template/aplicando-controller.html' });			
}]);
