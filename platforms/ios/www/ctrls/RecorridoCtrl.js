(function(){

var app = angular.module('RecorridoCtrl', []);

    app.controller('RecorridoCtrl', ['$scope', '$state', '$ionicLoading',function ($scope, $state, $ionicLoading) {
        

        $scope.show = function() {
            $ionicLoading.show({
                template: 'Calculando ruta...'
            }).then(function(){

            });
        }

        $scope.hide = function(){
            $ionicLoading.hide().then(function(){
                           
            });
        };

        $scope.irDetalles = function(m){
            
            $scope.show();
            setTimeout(function(){

               $scope.hide();
        	   $state.go('tab.recorrido-detalles', { id : m });
               

            }, 2000);
            

        }

    }]);     

}());


   