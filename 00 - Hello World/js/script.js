angular.module('app', []);

angular.module('app')
  .controller('appCtrl', ['$scope', function ($scope) {
    $scope.message = "Olá, Mundo!";
  }]);