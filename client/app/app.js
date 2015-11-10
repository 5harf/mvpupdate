angular.module('codeChat', [
  'chat',
  'codeChat.services',
  'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('chat', {
      url: "/chat",
      templateUrl: "app/chat/chat.html"
    })
    .state('home', {
      url: '/',
      templateUrl: "app/home/home.html"
    })
    .state('signup', {
      url: '/signup',
      templateUrl: "app/signup/signup.html"
    })


});

