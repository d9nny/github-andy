githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';
  var delveUrl = 'https://api.github.com/users/';
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

    delve: function(userObj) {
      return $http({
        url: delveUrl + userObj.login,
        method: 'GET'
      });
    }
  }
}]);