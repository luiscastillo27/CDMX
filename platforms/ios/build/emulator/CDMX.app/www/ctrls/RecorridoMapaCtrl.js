(function(){

var app = angular.module('RecorridoMapaCtrl', []);

    app.controller('RecorridoMapaCtrl', ['$scope', '$stateParams', '$ionicPopup', 'Rutas', '$cordovaGeolocation', function ($scope, $stateParams, $ionicPopup, Rutas, $cordovaGeolocation) {
      
        var orgn = $stateParams.origen;
        var desn = $stateParams.destino;

        if(orgn == 0){

            var dataOrgn = {
                nombre: "Palacio de Bellas Artes",
                direcccion: "Av. Juárez, Centro Histórico, 06050 Ciudad de México, CDMX"
            }

        }

        if(orgn == 1){
            
            var dataOrgn = {
                nombre: "Museo Memoria y Tolerancia",
                direcccion: "Avenida Juarez 8, Centro, 06010 Cuauhtémoc, CDMX"
            }

        }

        if(orgn == 2){
            
            var dataOrgn = {
                nombre: "Museo de Arte Popular",
                direcccion: "Revillagigedo 11, Centro, 06050 Ciudad de México, CDMX"
            }

        }

        if(orgn == 3){
            
            var dataOrgn = {
                nombre: "Museo Mural Diego Rivera",
                direcccion: "Calle Balderas y Colon S/N, Cuauhtémoc, Centro, 06000 Ciudad de México, CDMX"
            }

        }

        if(orgn == 4){
            
            var dataOrgn = {
                nombre: "Museo Nacional de San Carlos",
                direcccion: "Puente de Alvarado 50, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX"
            }

        }

        if(orgn == 5){
            
            var dataOrgn = {
                nombre: "Museo Franz Mayer",
                direcccion: "Av. Hidalgo 45, Guerrero, 06300 Cuauhtemoc, CDMX"
            }

        }

        if(orgn == 6){
            
            var dataOrgn = {
                nombre: "Museo Nacional de Arte Munal",
                direcccion: "Calle Tacuba 8, Centro Histórico, 06010 Cuauhtemoc, CDMX"
            }

        }

        if(orgn == 7){
            
            var dataOrgn = {
                nombre: "Museo del Templo Mayor",
                direcccion: "Seminario 8, Centro Histórico, Cuauhtémoc, 06060 Ciudad de México, CDMX"
            }

        }

        if(orgn == 8){
            
            var dataOrgn = {
                nombre: "Museo de la Mujer",
                direcccion: "República de Bolivia 17, Cuauhtémoc, Centro, 06020 Ciudad de México, CDMX"
            }

        }

        if(orgn == 9){
            
            var dataOrgn = {
                nombre: "Antiguo Colegio de San Ildefonso",
                direcccion: "Justo Sierra 16, Centro Histórico, Centro, 06020 Ciudad de México, CDMX"
            }

        }

        if(orgn == 10){
            
            var dataOrgn = {
                nombre: "Museo de Cera",
                direcccion: "Londres 6, Juárez, 06600 Ciudad de México, CDMX"
            }

        }

        if(orgn == 11){
            
            var dataOrgn = {
                nombre: "Museo de la Ciudad de México",
                direcccion: "José María Pino Suárez 30, Centro, 06060 Ciudad de México, CDMX"
            }

        }

        if(orgn == 12){
            
            var dataOrgn = {
                nombre: "Museo Nacional de Antropología",
                direcccion: "Av Paseo de la Reforma & Calzada Gandhi S/N, Chapultepec Polanco, Miguel Hidalgo, 11560 Ciudad de México, CDMX"
            }

        }

        if(orgn == 13){
            
            var dataOrgn = {
                nombre: "Museo Nacional de Antropología",
                direcccion: "Av Paseo de la Reforma & Calzada Gandhi S/N, Chapultepec Polanco, Miguel Hidalgo, 11560 Ciudad de México, CDMX"
            }

        }


        if(desn == 0){

            var dataDstn = {
                nombre: "Palacio de Bellas Artes",
                direcccion: "Av. Juárez, Centro Histórico, 06050 Ciudad de México, CDMX"
            }

        }

        if(desn == 1){
            
            var dataDstn = {
                nombre: "Museo Memoria y Tolerancia",
                direcccion: "Avenida Juarez 8, Centro, 06010 Cuauhtémoc, CDMX"
            }

        }

        if(desn == 2){
            
            var dataDstn = {
                nombre: "Museo de Arte Popular",
                direcccion: "Revillagigedo 11, Centro, 06050 Ciudad de México, CDMX"
            }

        }

        if(desn == 3){
            
            var dataDstn = {
                nombre: "Museo Mural Diego Rivera",
                direcccion: "Calle Balderas y Colon S/N, Cuauhtémoc, Centro, 06000 Ciudad de México, CDMX"
            }

        }

        if(desn == 4){
            
            var dataDstn = {
                nombre: "Museo Nacional de San Carlos",
                direcccion: "Puente de Alvarado 50, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX"
            }

        }

        if(desn == 5){
            
            var dataDstn = {
                nombre: "Museo Franz Mayer",
                direcccion: "Av. Hidalgo 45, Guerrero, 06300 Cuauhtemoc, CDMX"
            }

        }

        if(desn == 6){
            
            var dataDstn = {
                nombre: "Museo Nacional de Arte Munal",
                direcccion: "Calle Tacuba 8, Centro Histórico, 06010 Cuauhtemoc, CDMX"
            }

        }

        if(desn == 7){
            
            var dataDstn = {
                nombre: "Museo del Templo Mayor",
                direcccion: "Seminario 8, Centro Histórico, Cuauhtémoc, 06060 Ciudad de México, CDMX"
            }

        }

        if(desn == 8){
            
            var dataDstn = {
                nombre: "Museo de la Mujer",
                direcccion: "República de Bolivia 17, Cuauhtémoc, Centro, 06020 Ciudad de México, CDMX"
            }

        }

        if(desn == 9){
            
            var dataDstn = {
                nombre: "Antiguo Colegio de San Ildefonso",
                direcccion: "Justo Sierra 16, Centro Histórico, Centro, 06020 Ciudad de México, CDMX"
            }

        }

        if(desn == 10){
            
            var dataDstn = {
                nombre: "Museo de Cera",
                direcccion: "Londres 6, Juárez, 06600 Ciudad de México, CDMX"
            }

        }

        if(desn == 11){
            
            var dataDstn = {
                nombre: "Museo de la Ciudad de México",
                direcccion: "José María Pino Suárez 30, Centro, 06060 Ciudad de México, CDMX"
            }

        }

        if(desn == 12){
            
            var dataDstn = {
                nombre: "Museo Nacional de Antropología",
                direcccion: "Av Paseo de la Reforma & Calzada Gandhi S/N, Chapultepec Polanco, Miguel Hidalgo, 11560 Ciudad de México, CDMX"
            }

        }

        if(desn == 13){
            
            var dataDstn = {
                nombre: "Museo Nacional de Antropología",
                direcccion: "Av Paseo de la Reforma & Calzada Gandhi S/N, Chapultepec Polanco, Miguel Hidalgo, 11560 Ciudad de México, CDMX"
            }

        }

        var origen = dataOrgn.direcccion;
        var destino = dataDstn.direcccion;

        var options = {timeout: 10000, enableHighAccuracy: true};

        $cordovaGeolocation.getCurrentPosition(options).then(function(position){

            var coordenas = origen ;

            var latLng = new google.maps.LatLng( coordenas );

            var mapOptions = {
              center: latLng,
              zoom: 17,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }            

            $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

            var marker = new google.maps.Marker({
                position: latLng,
                map: $scope.map,
                center: latLng,
                zoom: 4,
            });

            //OBJETO  DE CONFIGURACION DR
            var configDr = {
                map: $scope.map
            }

            //OBJETO  DE CONFIGURACION DS
            var configDs = {
                origin: coordenas,
                destination: destino,
                travelMode: google.maps.TravelMode.DRIVING
            }
            //OBTENER LAS COORDENADAS
            var ds = new google.maps.DirectionsService();

            //TRADUCE LAS COORDENADAS A LAS LINAS DEL MAPA
            var dr = new google.maps.DirectionsRenderer( configDr );

            //TRASAR LA RUTA
            function rutear(result, status){
                
                if(status == "OK"){
                    dr.setDirections(result);
                }
            }

            ds.route( configDs, rutear );

        }, function(error){
            console.log("Could not get location");
        });
        
    }]);

}());