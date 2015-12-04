githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function () {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
        self.extendSearchData(self.searchResult);
        console.log(response.data);
      })
    };

  self.doDelve = function(userObj) {
    Search.delve(userObj)
      .then(function(response) {
        angular.extend(userObj, response.data);
      })
  };

  self.extendSearchData = function(results) {
    results.items.forEach(function(userObj) {
      self.doDelve(userObj);
    })
  };

}]);