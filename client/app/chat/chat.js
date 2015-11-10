angular.module('chat', [])

.controller('ChatCtrl', function ($scope, Send) {
  // Your code here
  $scope.data = {};
  $scope.getMessages = function () {
    var message = Send.getMessages();
    $scope.data.messages = message;
  };
  $scope.sendMessage = function(message) {
    Send.sendMessage(message)
    .then(function(message) {
      $scope.data.messages.push(message);
    })
  }
  $scope.checkLength = function (num, message) {
    console.log(num === message.message.length)
    return num === message.message.length;
  }
  $scope.getMessages();

});
