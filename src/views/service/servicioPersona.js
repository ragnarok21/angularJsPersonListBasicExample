angular.module("angularApp")
    .service("servicioPersona",function () {
        var list = {
            personas: [{
                "nombre": "Ramon",
                "apellido": "Duran"
            },
                {
                    "nombre": "Cesar",
                    "apellido": "G"
                }]
        };



        var result = {
            getList:getList,
            setList:setList,
            insert:insert,
            length:length
        }

        return result;

        function setList(newList){
            list = newList;
        }

        function getList(){
            return list;
        }

        function insert(data){
            list.personas.push(data);
            var newList = list;
            setList(newList);
        }

        function length(){
            return list.personas.length;
        }

    });