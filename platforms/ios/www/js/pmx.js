(function(){

    var app = angular.module('CDMX.pmx', [])

    app.factory('CruceBA', function() {

        var data = [
          'p1 0 3 2 4 1 5 7 6 9 8 11  10  12  13  0 = 44400',
          'p2 0 2 3 1 4 7 6 9 8 5 10  12  11  13  0 = 51850',
          'h1 0 3 2 4 1 7 6 9 8 5 11  10  12  13  0 = 56700',
          'h2 0 2 3 1 4 5 7 6 9 8 10  12  11  13  0 = 56890',
          'p1 0 7 13  6 11  12  9 3 5 8 1 2 10  4 0 = 53890',
          'p2 0 1 2 3 4 5 6 7 8 9 10  11  12  13  0 = 55040',
          'h1 0 3 13  12  11  5 6 7 8 9 1 2 10  4 0 = 60690',
          'h2 0 1 2 7 4 12  9 3 5 8 10  11  6 13  0 = 60790',
          'p1 0 5 13  12  4 8 1 10  11  9 3 7 2 6 0 = 56700',
          'p2 0 4 6 7 1 2 3 5 9 8 13  12  10  11  0 = 56890',
          'h1 0 6 13  12  4 2 3 5 9 8 11  7 10  6 0 = 44400',
          'h2 0 4 6 7 5 8 1 10  11  9 13  12  3 2 0 = 51850',
          'p1 0 1 2 3 4 5 7 6 9 8 10  12  13  11  0 = 57790',
          'p2 0 6 8 11  7 4 2 12  1 13  9 10  3 5 0 = 58250',
          'h1 0 8 9 3 6 4 2 12  1 13  10  7 5 11  0 = 53890',
          'h1 0 1 2 3 4 5 7 6 9 8 10  12  13  11  0 = 55040',
          'p1 0 7 8 2 1 9 10  3 6 4 5 11  13  12  0 = 60690',
          'p2 0 1 2 3 4 5 6 7 8 9 10  11  13  12  0 = 60790',
          'h1 0 4 3 2 1 5 6 7 8 9 10  11  13  12  0 = 56700',
          'h2 0 1 2 3 7 9 10  3 6 4 5 11  13  12  0 = 56890'
        ];

        return {
            all: function() {
                return data;
            }
        }

    });

    app.factory('CruceMC', function() {
       
        var data = [
          'p1 10  1 2 3 4 5 6 7 8 9 0 11  12  13  10  = 49690',
          'p2 10  0 1 2 3 4 5 6 7 8 9 11  12  13  10  = 51990',
          'h1 10  1 2 3 9 4 5 6 7 8 0 11  12  13  10  = 59390',
          'h2 10  0 1 2 3 5 6 7 8 9 8 11  12  13  10  = 60690',
          'p1 10  2 1 3 5 4 6 7 9 8 13  12  11  0 10  = 53890',
          'p2 10  7 13  6 11  12  9 3 5 8 1 2 0 4 10  = 53890',
          'h1 10  2 1 7 6 12  9 3 5 8 13  4 11  0 10  = 53800',
          'h2 10  3 13  5 11  4 6 7 9 8 1 2 0 12  10  = 53890',
          'p1 10  5 13  12  4 8 1 0 11  9 3 7 2 6 10  = 56700',
          'p2 10  4 6 7 1 2 3 5 9 8 13  12  0 11  10  = 56890',
          'h1 10  0 13  12  4 2 3 5 9 8 1 7 11  6 10  = 53890',
          'h2 10  4 6 7 3 8 1 0 11  9 13  12  5 2 10  = 55040',
          'p1 10  0 2 1 3 4 5 7 6 8 9 11  13  12  10  = 56900',
          'p2 10  6 8 11  7 4 2 12  1 13  9 0 3 5 10  = 58250',
          'h1 10  0 5 6 3 4 2 12  1 13  9 11  13  7 10  = 56890',
          'h2 10  1 13  11  12  4 5 7 6 8 9 0 3 2 10  = 57790',
          'p1 10  7 8 2 1 9 0 3 6 4 5 11  13  12  10  = 60690',
          'p2 10  1 2 3 4 5 6 0 8 9 7 11  13  12  10  = 64250',
          'h1 10  7 3 2 1 5 6 0 8 9 4 11  13  12  10  = 56090',
          'h2 10  1 2 8 5 9 0 3 6 4 7 11  13  12  10  = 56350'
        ];

        return {
            all: function() {
                return data;
            }
        }

    });

    app.factory('CruceTM', function() {

      var data = [
          'p1 7 2 3 1 4 0 6 9 8 5 10  12  11  13  7 = 53550',
          'p2 7 0 13  6 11  12  9 3 5 8 1 2 10  4 7 = 53890',
          'h1 7 2 6 1 4 12  9 3 5 8 10  0 11  13  7 = 51850',
          'h2 7 3 13  12  11  0 6 9 8 5 1 2 10  4 7 = 53890',
          'p1 7 3 2 4 1 5 0 6 9 8 11  10  12  13  7 = 55600',
          'p2 7 0 1 2 3 4 5 6 8 9 10  11  12  13  7 = 56090',
          'h1 7 3 2 0 1 4 5 6 8 9 11  10  12  13  7 = 60690',
          'h2 7 0 1 2 3 5 0 6 9 8 10  11  12  13  7 = 60790',
          'p1 7 1 2 3 4 5 0 6 9 8 10  12  13  11  7 = 56350',
          'p2 7 4 6 0 1 2 3 5 9 8 13  12  10  11  7 = 56840',
          'h1 7 1 6 0 4 2 3 5 9 8 10  12  13  11  7 = 53890',
          'h2 7 4 2 3 1 5 0 6 9 8 13  12  10  11  7 = 56700',
          'p1 7 1 2 3 4 5 6 0 8 9 10  11  12  13  7 = 57050',
          'p2 7 6 8 11  0 4 2 12  1 13  9 10  3 5 7 = 57350',
          'h1 7 8 6 3 5 4 2 12  1 13  10  11  0 9 7 = 53800',
          'h2 7 2 1 11  12  5 6 0 8 9 13  10  3 4 7 = 53890',
          'p1 7 6 8 11  0 4 2 12  1 13  9 10  3 5 7 = 58250',
          'p2 7 0 8 2 1 9 10  3 6 4 5 11  13  12  7 = 60690',
          'h1 7 1 8 11  0 9 10  3 6 4 4 2 12  5 7 = 56890',
          'h2 7 0 8 10  6 4 2 12  1 13  5 11  9 3 7 = 57790'
        ];

        return {
            all: function() {
                return data;
            }
        }

    });

    app.factory('CruceMA', function() {

      var data = [
          'p1 12  0 3 4 5 2 1 6 7 9 8 10  11  13  12  = 47890',
          'p2 12  3 1 0 2 4 6 5 7 8 10  9 13  11  12  = 53800',
          'h1 12  0 3 2 1 4 6 5 7 8 9 10  11  13  12  = 56090',
          'h2 12  3 5 0 4 2 1 6 7 9 10  8 13  11  12  = 56350',
          'p1 12  7 13  6 11  0 9 3 5 8 1 2 10  4 12  = 53890',
          'p2 12  4 3 2 1 0 5 7 8 9 11  10  6 13  12  = 55290',
          'h1 12  3 13  6 11  0 5 7 8 9 1 2 10  4 12  = 60690',
          'h2 12  4 7 2 1 0 9 3 5 8 11  10  6 13  12  = 60790',
          'p1 12  5 13  0 4 8 1 10  11  9 3 7 2 6 12  = 56700',
          'p2 12  4 6 7 1 2 3 5 9 8 13  0 10  11  12  = 56890',
          'h1 12  10  13  0 4 2 3 5 9 8 1 7 11  6 12  = 55600',
          'h2 12  4 6 7 3 8 1 10  11  9 13  0 5 2 12  = 56090',
          'p1 12  6 8 11  7 4 2 0 1 13  9 10  3 5 12  = 58250',
          'p2 12  1 2 3 4 5 6 7 8 9 10  11  0 13  12  = 58940',
          'h1 12  2 1 11  0 5 6 7 8 9 13  10  3 4 12  = 57790',
          'h2 12  8 6 3 5 4 2 0 1 13  10  11  7 13  12  = 58250',
          'p1 12  0 1 2 3 4 5 6 7 8 9 10  11  13  12  = 59390',
          'p2 12  7 8 2 1 9 10  3 6 4 5 11  13  0 12  = 60690',
          'h1 12  0 1 2 7 9 10  3 6 4 8 5 11  13  12  = 53550',
          'h2  12  3 9 2 1 4 5 6 7 8 10  11  13  0 12  = 53890'
        ];

        return {
            all: function() {
                return data;
            }
        }
    });

}());