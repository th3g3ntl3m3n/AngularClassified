(function () {
  "use strict";
  angular
  .module("ngClassifieds")
  .factory("classifiedFactory", function ($http) {

    function getClassifieds() {
        return $http.get("http://127.0.0.1:3000/data/classified.json")
    }

    return {
      getClassifieds : getClassifieds
    }
  });
})();
