app.controller('LoginController', ['$scope','LoginService', function($scope, LoginService) {

	
	$scope.login = "";
	$scope.password = "";
	$scope.erro='';
	$scope.logar = function(){

		LoginService.getListaUsuarios().then(function(resp) {
			
			$scope.produtos = resp.data;
			angular.forEach(resp.data, function (obj, index) {
			    if (obj.login = $scope.login && obj.password == $scope.password ) {
				window.location.href = window.location.href+'listaProdutos';
			    }
			});
			$scope.erro = "Login ou senha inválidos. Tente novamente";
		}, function(error) {
			alert(error.data);
		});
	};
	
}]);
