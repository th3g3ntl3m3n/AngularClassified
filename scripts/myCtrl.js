app.controller("myCtrl", function($scope) {
    $scope.firstName	= "John";
    $scope.lastName= "Doe";
    $scope.points = [1,2,3,4,5,6,7,8,9,0];
    $scope.square = 0;

    $scope.names = ['God'];
    $scope.addName = function(newName) {
      console.log(newName);
      $scope.names.push(newName);
      console.log($scope.names);
      $scope.name = "";
    }
});
