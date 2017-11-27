(function(){

    var app = angular.module('CDMX', ['ionic', 'ngCordova', 'CDMX.rutas', 'CDMX.selecion', 'InicioCtrl', 'RecorridoCtrl', 'RutasDetallesCtrl', 'RecorridoMapaCtrl'])

    app.run(function($ionicPlatform) {

        $ionicPlatform.ready(function() {

            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
              StatusBar.styleDefault();
            }

            API = {
                'token_name': 'APP-TOKEN',
                'base_url': 'http://localhost:2715/'
            };
          
        });

    })

    app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider)  {

      $ionicConfigProvider.tabs.position('bottom');

      $stateProvider.state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })

      $stateProvider.state('tab.recorrido', {
          url: '/recorrido',
          views: {
            'tab-recorrido': {
              templateUrl: 'templates/tab-recorrido.html',
              controller: 'RecorridoCtrl'
            }
          }
      })

      $stateProvider.state('tab.recorrido-detalles', {
          url: '/recorrido/:id',
          views: {
            'tab-recorrido': {
              templateUrl: 'templates/recorrido-detalles.html',
              controller: 'RutasDetallesCtrl'
            }
          }
      })

      $stateProvider.state('tab.recorrido-mapa', {
          url: '/recorrido-mapa/:origen/:destino',
          views: {
            'tab-recorrido': {
              templateUrl: 'templates/recorrido-mapa.html',
              controller: 'RecorridoMapaCtrl'
            }
          }
      })

      $stateProvider.state('tab.inicio', {
          url: '/inicio',
          views: {
            'tab-inicio': {
              templateUrl: 'templates/tab-inicio.html',
              controller: 'InicioCtrl'
            }
          }
      });

      $urlRouterProvider.otherwise('/tab/inicio');

    });

}());