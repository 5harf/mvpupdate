angular.module('chat', [])

.controller('ChatCtrl', function ($scope, Send) {
  // Your code here
  $scope.data = {};
  $scope.getMessages = function () {
    Send.getMessages()
    .then(function(messages) {
      $scope.data.messages = messages;
    });
  };
  $scope.sendMessage = function(message) {
    Send.sendMessage(message)
    .then(function() {
      console.log('POSTED IN CHAT.JS')
    })
    $scope.newMessage = '';
  }

  $scope.checkLength = function (num, message) {
    // if (message.message.length === 6) {console.log(message.message.length);}
    return num === message.message.length;
  }
  $scope.getMessages();
  setInterval($scope.getMessages, 1000);

});
