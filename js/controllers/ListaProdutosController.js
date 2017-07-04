app.controller('ListaProdutosController', ['$scope','ProdutosService', function($scope, ProdutosService) {
		
	$scope.produtos = [];
	$scope.carrinho = [];
	$scope.filtro="";
	$scope.total=0;
	var idProdutoLista = 1;
	$scope.compraFinalizada = false;
	ProdutosService.getListaProdutos().then(function(resp) {
			$scope.produtos = resp.data;
		}, function(error) {
			alert(error.data);
		});

	$scope.adicionarCarrinho = function(e){
		$scope.compraFinalizada = false;
		var prod = {id:idProdutoLista++,descricao:$(e.currentTarget).data("descricao"), preco:$(e.currentTarget).data("preco")};
		$scope.total = $scope.total + parseFloat($(e.currentTarget).data("preco"));
		$scope.carrinho.push(prod);
	};
	
	$scope.retirarCarrinho = function(e){
		var id = $(e.currentTarget).data("id");
		angular.forEach($scope.carrinho, function(value, key) {
		  if(value.id == id){
			$scope.total = $scope.total - parseFloat(value.preco);
			$scope.carrinho.splice(key,1);
		  }
		});
		
	};
	
	$scope.finalizarPedido = function(e){
		$scope.compraFinalizada = true;
		$scope.carrinho = [];
		$scope.total = 0;
	};
	//$(".tableEstilizada").DataTable();
}]);
