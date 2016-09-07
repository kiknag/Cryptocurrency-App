var app = angular.module('cryptoApp', ['ngMaterial']);

app.controller('AppCtrl', function($scope, $http) {

  $scope.title = 'Cryptocurrency Price App';
  $scope.currencies = [];

  // All currency codes I need
  var currencyCodes = [
    'btc',
    'etc',
    'burst',
    'doge',
    'ltc',
    'dash',
    'ppc'
  ];

  // Loop through the currencies
  for(var coinName in currencyCodes) {
    // Make HTTP request to all our coins
    $http.get('https://coinmarketcap-nexuist.rhcloud.com/api/' + currencyCodes[coinName])
      .then(function(response) {
        // Push current coin information to main currencies array
        $scope.currencies.push({
          name: response.data.name,
          price: response.data.price.usd
        });
      });
  }

});
