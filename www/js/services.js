angular.module('starter.services', [])

.factory('Movies', function($http, myConfig) {
  return {
    getUpcoming: function() {
      return $http.get(myConfig.url + 'movie/upcoming?api_key=' + myConfig.api_key);
    },
    getDetail: function(id) {
      return $http.get(myConfig.url + 'movie/' + id + '?api_key=' + myConfig.api_key);
    },
    getByQuery: function(query) {
      return $http.get(myConfig.url + 'search/movie?api_key=' + myConfig.api_key + '&query=' + query);
    }
  };
});
