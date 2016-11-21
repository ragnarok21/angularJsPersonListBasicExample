angular.module("angularApp")
    .controller("crearPersona",function ($scope,servicioPersona) {
        $scope.nombre="";
        $scope.apellido="";
        $scope.create = function () {
            var data = {
                nombre:$scope.nombre,
                apellido:$scope.apellido
            }

            servicioPersona.insert(data);
            $scope.nombre="";
            $scope.apellido="";
        }
    });