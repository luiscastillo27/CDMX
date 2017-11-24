(function(){

var app = angular.module('RutasDetallesCtrl', []);

    app.controller('RutasDetallesCtrl', ['$scope', '$state', '$stateParams', '$ionicPopup', 'Rutas',function ($scope, $state,  $stateParams, $ionicPopup, Rutas) {
        
        $scope.irMapa = function(org, des){
            $state.go('tab.recorrido-mapa', { origen : org , destino: des});
        }
        var params = $stateParams.id;
        $scope.recoridos = [];

        if(params == 0 || params == 1 || params == 2 || params == 3){


            if(params == 0){

                $scope.titulo = "Bellas artes";
                var data = [{
                    id: 0,
                    origen: 0,
                    destino: 1,
                    img: "museo0.jpg",
                    nombre: "Palacio de Bellas Artes",
                    direcccion: "Av. Juárez, Centro Histórico, 06050 Ciudad de México, CDMX"
                },{
                    id: 1,
                    origen: 1,
                    destino: 2,
                    img: "museo1.jpg",
                    nombre: "Museo Memoria y Tolerancia",
                    direcccion: "Avenida Juarez 8, Centro, 06010 Cuauhtémoc, CDMX"
                },{
                    id: 2,
                    origen: 2,
                    destino: 3,
                    img: "museo2.jpg",
                    nombre: "Museo de Arte Popular",
                    direcccion: "Revillagigedo 11, Centro, 06050 Ciudad de México, CDMX"
                },{
                    id: 3,
                    origen: 3,
                    destino: 4,
                    img: "museo3.jpg",
                    nombre: "Museo Mural Diego Rivera",
                    direcccion: "Calle Balderas y Colon S/N, Cuauhtémoc, Centro, 06000 Ciudad de México, CDMX"
                },{
                    id: 4,
                    origen: 4,
                    destino: 5,
                    img: "museo4.jpg",
                    nombre: "Museo Nacional de San Carlos",
                    direcccion: "Puente de Alvarado 50, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX"
                },{
                    id: 5,
                    origen: 5,
                    destino: 6,
                    img: "museo5.jpg",
                    nombre: "Museo Franz Mayer",
                    direcccion: "Av. Hidalgo 45, Guerrero, 06300 Cuauhtemoc, CDMX"
                },{
                    id: 6,
                    origen: 6,
                    destino: 7,
                    img: "museo6.jpg",
                    nombre: "Museo Nacional de Arte Munal",
                    direcccion: "Calle Tacuba 8, Centro Histórico, 06010 Cuauhtemoc, CDMX"
                },{
                    id: 7,
                    origen: 7,
                    destino: 8,
                    img: "museo7.jpg",
                    nombre: "Museo del Templo Mayor",
                    direcccion: "Seminario 8, Centro Histórico, Cuauhtémoc, 06060 Ciudad de México, CDMX"
                },{
                    id: 8,
                    origen: 8,
                    destino: 9,
                    img: "museo8.jpg",
                    nombre: "Museo de la Mujer",
                    direcccion: "República de Bolivia 17, Cuauhtémoc, Centro, 06020 Ciudad de México, CDMX"
                },{
                    id: 9,
                    origen: 9,
                    destino: 10,
                    img: "museo9.jpg",
                    nombre: "Antiguo Colegio de San Ildefonso",
                    direcccion: "Justo Sierra 16, Centro Histórico, Centro, 06020 Ciudad de México, CDMX"
                },{
                    id: 10,
                    origen: 10,
                    destino: 11,
                    img: "museo10.jpg",
                    nombre: "Museo de Cera",
                    direcccion: "Londres 6, Juárez, 06600 Ciudad de México, CDMX"
                },{
                    id: 11,
                    origen: 11,
                    destino: 12,
                    img: "museo11.jpg",
                    nombre: "Museo de la Ciudad de México",
                    direcccion: "José María Pino Suárez 30, Centro, 06060 Ciudad de México, CDMX"
                },{
                    id: 12,
                    origen: 12,
                    destino: 13,
                    img: "museo12.jpg",
                    nombre: "Museo Nacional de Antropología",
                    direcccion: "Av Paseo de la Reforma & Calzada Gandhi S/N, Chapultepec Polanco, Miguel Hidalgo, 11560 Ciudad de México, CDMX"
                },{
                    id: 13,
                    origen: 13,
                    destino: 13,
                    img: "museo13.jpg",
                    nombre: "Museo Nacional de Antropología",
                    direcccion: "Av Paseo de la Reforma & Calzada Gandhi S/N, Chapultepec Polanco, Miguel Hidalgo, 11560 Ciudad de México, CDMX"
                }];
                $scope.recoridos = data;

            }
            if(params == 1){

                $scope.titulo = "Museo de Antropologia";
                
                $scope.recoridos = data;

            }
            if(params == 2){

                $scope.titulo = "Museo de Cera";
                
                $scope.recoridos = data;

            }
            if(params == 3){

                $scope.titulo = "Templo Mayor";
                
                $scope.recoridos = data;

            }


        }
        
        // if( == 0){

        //         $scope.titulo = "Palacio de Bellas Artes";
                

        // }

        
    }]);

}());