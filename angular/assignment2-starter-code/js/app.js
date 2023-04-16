(function () {
    'use strict';
    
    $controller(constructor, locals);

    angular.module('MyApp', [])
    .controller('ToBuyController', ToBuyController);
    
    ToBuyController.$inject = ['$scope'];
    function ToBuyController($scope) {
        $scope.name = '';
    
    
      $scope.feedOleg = function () {
        const str = $scope.name;
        const words = str.split(' ');

        if (words == 0) {
            $scope.sayMessage = function () {
                return "Please enter data first!";
              };        
        } else if (words.length <= 3) {
            $scope.sayMessage = function () {
                return "Enjoy!";
              };
        } else {
            $scope.sayMessage = function () {
                return "Too much!";
              };
        };
        console.log(words);
      };
    }
    
    })();






   