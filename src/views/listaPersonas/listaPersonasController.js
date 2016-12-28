angular
    .module("angularApp")
    .controller("listaPersonas", function ($scope,servicioPersona) {

        $scope.list = servicioPersona.getList();
        $scope.remove = function(index){
            servicioPersona.remove(index);
        };

    });