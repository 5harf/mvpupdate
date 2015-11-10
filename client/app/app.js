angular.module('codeChat', [
  'chat',
  'codeChat.services',
  'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('chat', {
      url: "/",
      templateUrl: "app/chat/chat.html"
    })

});

