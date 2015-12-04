githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';
  var revealUrl = 'https://api.github.com/users/';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
        }
      });
    },

    reveal: function(userObj) {
      return $http({
        url: revealUrl + userObj.login,
        method: 'GET'
      });
    }
  }
}]);