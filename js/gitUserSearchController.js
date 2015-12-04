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
    };

  self.isRevealed = function(userObj) {
    return self.currentReveal === userObj;
  }

  self.picked = function(url) {
    self.this = url;
    console.log(url);
    Search.reveal(url)
    .then(function(response) {
      angular.extend(self.currentReveal, response.data);
    })
  }

  self.revealOne = function(url) {
    return self.this === url;
  }
}]);