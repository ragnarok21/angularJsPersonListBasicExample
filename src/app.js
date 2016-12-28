var app = angular
       .module("angularApp",["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/crearPersona",{
        templateUrl:"/views/crearPersona/index.html"
    });

    $routeProvider.when("/listaPersonas",{
        templateUrl:"/views/listaPersonas/index.html"
    });

    $routeProvider.when("/",{
        templateUrl:"/views/home/home.html"
    });

    $routeProvider.otherwise({redirectTo:"/"});
})


