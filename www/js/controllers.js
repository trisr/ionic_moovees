angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope, Movies) {
  $scope.results = {};
  $scope.val = '';

  Movies.getUpcoming().success(function(data) {
    $scope.results = data.results;
  });

  var doSearch = ionic.debounce(function(query) {
    if(query != '') {
      Movies.getByQuery(query).success(function(data) {
        $scope.results = data.results;
      });  
    } else {
      Movies.getUpcoming().success(function(data) {
        $scope.results = data.results;
      });
    }
  }, 500);

  $scope.search = function(query) {
    doSearch(query);
  };
})

.controller('detailCtrl', function($scope, Movies, $stateParams) {
  Movies.getDetail($stateParams.id).success(function(data) {
    $scope.result = data;
  })
});
