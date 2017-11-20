(function(){

var app = angular.module('RecorridoCtrl', []);

    app.controller('RecorridoCtrl', ['$scope', '$state', '$ionicPopup', 'Rutas' ,function ($scope, $state, $ionicPopup, Rutas) {
        
        $scope.irDetalles = function(m){
            
            // $scope.loading = $ionicLoading.show({
            //     content: 'Getting current location...',
            //     showBackdrop: false
            // });
        	$state.go('tab.recorrido-detalles', { id : m });
            //$scope.loading.hide();

        }

    }]);     

}());


   