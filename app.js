//
var app = angular.module('puppyStyleApp', [])
  .constant('appSettings',
  {
    apiURL: "http://www.recipepuppy.com/api/",
    apiMinimumQueryLength: 3
  });