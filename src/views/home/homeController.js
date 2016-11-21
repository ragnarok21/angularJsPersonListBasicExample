angular
    .module("angularApp")
    .controller("homePersonas", function ($scope,servicioPersona) {

        $scope.size = servicioPersona.length();
    });