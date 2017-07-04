app.factory('LoginService', ['$http', function($http) {
	
	return {
		getListaUsuarios : function() {
			return $http.get('data/usuarios.json');			
		}
	}
	
}]);
