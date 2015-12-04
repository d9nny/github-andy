githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function () {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
        console.log(self.searchResult);
      })
    };

  self.reveal = function(userObj) {
    self.currentReveal = userObj
    Search.reveal(userObj)
      .then(function(response) {
        angular.extend(userObj, response.data);
      })
    };
  self.isRevealed = function(userObj) {
    return self.currentReveal === userObj;
  }
}]);