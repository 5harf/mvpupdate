angular.module('codeChat.services', [])

.factory('Send', function ($http) {
  var getMessages = function () {

    return $http({
      method: 'GET',
      url: 'http://localhost:8000/message'
    })
    .then(function (res) {
      return res.data;
    });
  };

  var sendMessage = function(message) {
    console.log('MESSAGE', message)
    return $http({
      method: 'POST',
      url: 'http://localhost:8000/message',
      data: {
        message: message
      }
    })


  };

  return {
    getMessages: getMessages,
    sendMessage: sendMessage
  };
})
