(function () {
    'use strict';
    
    angular.module('MyApp', [])
    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
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

    var p = new Person("Yaakov");

    function Person(name) {
      this.name = name;
    }

    console.log(p);


    function asyncFunction (someVal) {
      var deferred = $q.defer();
      
      if (someVal > 3) {
        deferred.resolve({val: (someVal + 3)});
      }
      else {
        deferred.reject("Everything is wrong! Wrong, I tell you!");
      }
    }

   