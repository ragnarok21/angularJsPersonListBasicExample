angular
    .module("angularApp")
    .controller("listaPersonas", function ($scope,servicioPersona) {

        $scope.list = servicioPersona.getList();

    });