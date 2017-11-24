//
app
  .service('RecipePuppy', function (appSettings, $http) {
    this.fetch = function (q) {
      let res = $http.get(appSettings.apiURL, { params: { 'q': q } })
        .then(function (response) {
          return response.data.results;
        })

      return res;
    }
  });