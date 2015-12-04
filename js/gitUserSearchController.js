githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function () {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
        console.log(response.data);
      })
    };

  self.reveal = function(userObj) {
    self.currentReveal = userObj
    };

  self.isRevealed = function(userObj) {
    return self.currentReveal === userObj;
  }

  self.apiCall = function(url) {
    Search.reveal(url)
    .then(function(response) {
      angular.extend(self.currentReveal, response.data);
    })
  }

  self.setTab = function(tab) {
    self.activeTab = tab;
  };

  self.isActive = function(tab) {
    return (self.activeTab === tab);
  };
}]);