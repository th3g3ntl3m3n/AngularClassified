(function () {
  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedFactory,$mdDialog, $mdSidenav, $mdToast){
      $scope.name = {
        first: "Vikas",
        last: "Sharma"
      };

      $scope.message = "Learning Angular!!!";

      classifiedFactory.getClassifieds().then(function(data) {
        $scope.classified = data.data;
      });

      $scope.openSidebar = function() {
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = function() {
        $mdSidenav('left').close();
      }

      $scope.saveClassified = function(clfs) {
        if(clfs) {
          $scope.classified.push(clfs);
          $scope.clfs = {};
          $scope.closeSidebar();
          $mdToast.show($mdToast.simple().content("Classified Saved Successfully.").position('top, right').hideDelay(3000));
        }
      }
      $scope.editClassified = function(clf) {
        $scope.editing = true;
        $scope.openSidebar();
        $scope.clfs = clf;
      }

      $scope.saveEdit = function() {
        $scope.editing = false;
        $scope.clfs = {};
        $scope.closeSidebar();
        $mdToast.show(
          $mdToast.simple().content("Editing Saved Successfully.").position('top, right').hideDelay(2000)
        );
      }

      $scope.deleteClassified = function(event, clf) {
        var confirm = $mdDialog.confirm()
          .title("Are you sure to delete " + clf.name + "?")
          .ok("Yes")
          .cancel("No")
          .targetEvent(event);
        $mdDialog.show(confirm).then(function() {
          var index = $scope.classified.indexOf(clf);
          $scope.classified.splice(index,1);
          $mdToast.show(
            $mdToast.simple().content("Deleted Successfully.").position('top, right').hideDelay(2000)
          );
        }, function() {

        });
      }
    });
})();
