// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.constant('myConfig', {
  'url': "http://api.themoviedb.org/3/",
  'api_key': '44e313e0c217b441803d543a4505cc91',
  'img_url': 'https://image.tmdb.org/t/p/w185/'
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('config', {
      url: "/config",
      abstract: true,
      templateUrl: "templates/config.html"
    })

    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: 'homeCtrl'
    })

    .state('detail', {
      url: "/movie/:id",
      templateUrl: "templates/detail.html",
      controller: 'detailCtrl'
    });

  $urlRouterProvider.otherwise('/home');
});
