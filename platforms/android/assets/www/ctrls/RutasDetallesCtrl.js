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






        console.log("inicializar");
        var inicializar = {
            0: "Palacio de Bellas Artes",
            1 : "Museo Memorial y Tolerancia",
            2 : "Museo de Arte Popular",
            3 : "Museo Mural Diego Rivera",
            4 : "Museo Nacional de San Carlos",
            5 : "Museo Franz Mayer",
            6 : "Museo Nacional de Arte Mural",
            7 : "Museo de Templo Mayor",
            8 : "Museo de la Mujer",
            9 : "Colegio de San Ildefonso",
            10: "Museo de Cera",
            11: "Museo de la CDMX",
            12: "Museo Nacional de Antropología",
            13: "Museo Interactivo de la Economia"
        }

        console.log(inicializar);
       
        var distancias = {
            0: {
                1: "400",
                2: "600",
                3: "1500",
                4: "1700",
                5: "400",
                6: "750",
                7: "1200",
                8: "1700",
                9: "1200",
                10: "2800",
                11: "1400",
                12: "5500",
                13: "650"
            },
            1: {
                2: "190",
                3: "15300",
                4: "2800",
                5: "850",
                6: "1200",
                7: "1600",
                8: "2100",
                9: "1700",
                10: "2100",
                11: "1700",
                12: "5000",
                13: "1100"
            },
            2: {
                3: "15700",
                4: "1800",
                5: "1400",
                6: "1700",
                7: "2200",
                8: "2600",
                9: "2200",
                10: "1900",
                11: "1800",
                12: "4800",
                13: "1500"
            },
            3: {
                4: "16400",
                5: "15100",
                6: "14800",
                7: "14600",
                8: "15200",
                9: "14600",
                10: "15700",
                11: "13800",
                12: "15800",
                13: "14700"
            },
            4: {
                5: "1900",
                6: "1800",
                7: "2200",
                8: "3100",
                9: "2300",
                10: "2100",
                11: "2900",
                12: "4900",
                13: "1700"
            },
            5: {
                6: "1000",
                7: "1500",
                8: "1900",
                9: "2800",
                10: "2400",
                11: "2200",
                12: "5100",
                13: "950"
            },
            6: {
                7: "1100",
                8: "1600",
                9: "1200",
                10: "2800",
                11: "1900",
                12: "5500",
                13: "600"
            },
            7: {
                8: "1600",
                9: "2300",
                10: "4400",
                11: "1200",
                12: "7600",
                13: "2300"
            },
            8: {
                9: "1500",
                10: "5100",
                11: "2000",
                12: "7900",
                13: "1600"
            },
            9: {
                10: "4300",
                11: "1100",
                12: "7600",
                13: "2300"
            },
            10: {
                11: "4000",
                12: "4200",
                13: "3500"
            },
            11: {
                12: "700",
                13: "1600"
            },
            12: {
                13: "4200"
            }
        }

        console.log(distancias);

























        
    }]);

}());