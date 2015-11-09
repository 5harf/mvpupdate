angular.module('chat', [])

.controller('ChatCtrl', function ($scope, Send) {
  // Your code here
  $scope.data = {};
  $scope.getMessages = function () {
    var message = Send.getMessages();
    $scope.data.messages = message;
  };
  $scope.sendMessages = function(message) {
    Send.sendMessage(message);
  }
  $scope.getMessages();

});
