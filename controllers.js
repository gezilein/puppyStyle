//
app
  .controller('puppyController', function (appSettings, RecipePuppy, $scope) {
    $scope.minQuery = appSettings.apiMinimumQueryLength;
    $scope.recipes = [];
    $scope.query = "";
    $scope.queryEntry = function () {
      if ($scope.query.length < appSettings.apiMinimumQueryLength) {
        return;
      }

      RecipePuppy
        .fetch($scope.query)
        .then(function (data) {
          $scope.recipes = data;
        });
    }
  });