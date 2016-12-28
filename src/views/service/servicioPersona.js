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
            length:length,
            remove:remove
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
        }

        function length(){
            return list.personas.length;
        }

        function remove(index){
            list.personas.splice(index,1);
        }
    });