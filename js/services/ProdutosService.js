app.factory('ProdutosService', ['$http', function($http) {
	
	return {
		getListaProdutos : function() {
			return $http.get('data/produtos.json');			
		}
	}
	
}]);
