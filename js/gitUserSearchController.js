githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;
  self.currentReveal = {};



  self.doSearch = function () {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
    };

  self.setSelected = function(tab) {
    self.activeSelection = tab;
    self.activeTab = 1;
  };

  self.selected = function() {
    return self.activeSelection === 1;
  };

  self.apiCall = function(url) {
        console.log(url);
    Search.reveal(url)
    .then(function(response) {
      angular.extend(self.currentReveal, response.data);
    })
  };

  self.setTab = function(tab) {
    self.activeTab = tab;
  };

  self.isActive = function(tab) {
    return (self.activeTab === tab);
  };
}]);