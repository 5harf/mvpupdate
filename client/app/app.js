angular.module('codeChat', [
  'chat',
  'codeChat.services',
  'ui.router'
  // require('angular-ui-router')
  ])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('chat', {
      url: "/",
      templateUrl: "app/chat/chat.html"
    })
    // .state('state1.list', {
    //   url: "/list",
    //   templateUrl: "partials/state1.list.html",
    //   controller: function($scope) {
    //     $scope.items = ["A", "List", "Of", "Items"];
    //   }
    // })
    // .state('state2', {
    //   url: "/state2",
    //   templateUrl: "partials/state2.html"
    // })
    // .state('state2.list', {
    //   url: "/list",
    //   templateUrl: "partials/state2.list.html",
    //   controller: function($scope) {
    //     $scope.things = ["A", "Set", "Of", "Things"];
    //   }
    // });
});


// .config(function ($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'app/chat/chat.html',
//       controller: 'ChatCtrl'
//     });
// });
