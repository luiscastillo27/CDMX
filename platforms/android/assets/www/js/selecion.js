(function(){

    var app = angular.module('CDMX.selecion', [])

    app.factory('SeleBA', function() {

        var selectiones = [{
            44400: 5,
            51850: 4,
            53890: 8,
            55040: 1,
            56700: 10,
            56890: 6,
            57790: 3,
            58250: 9,
            60690: 7,
            60790: 2
        }];

        return {
            all: function() {
                return selectiones;
            }
        }

    });

    app.factory('SeleMA', function() {

        var selectiones = [{
            47890: 2,
            53800: 4,
            53890: 8,
            55290: 5,
            56700: 10,
            56890: 6,
            58250: 9,
            58940: 1,
            59390: 3,
            60690: 7
        }];

        return {
            all: function() {
                return selectiones;
            }
        }

    });

    app.factory('SelesMC', function() {

        var selectiones = [{
            49690: 1,
            51990: 2,
            53890: 3,
            53890: 7,
            56700: 9,
            56890: 5,
            56900: 4,
            58250: 8,
            60690: 6
        }];

        return {
            all: function() {
                return selectiones;
            }
        }

    });

    app.factory('SeleTM', function() {

        var selectiones = [{
            44400: 5,
            51850: 9,
            53890: 6,
            55040: 2,
            56700: 4,
            56890: 7,
            57790: 11,
            58250: 1,
            60690: 10,
            60790: 8,
            60790: 3
        }];

        return {
            all: function() {
                return selectiones;
            }
        }

    });

}());