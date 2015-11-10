angular.module('codeChat.services', [])

.factory('Send', function ($http) {
  // Your code here
  var getMessages = function () {

    return [
    // 'Hello, how is the weather in San Francisco today?'.split(' '), 'Countless Brits are still waiting to return home amid travel chaos.'.split(' '), ['Why?'], ['what is up?']
    {message:['yes'], createdAt:2}, {message:['why', 'not?'], createdAt:1}, {message:['However,', 'are', 'you', 'inside'], createdAt:3}, {message:['I', 'am', 'not'], createdAt:-1}
      ];
    // return $http({
    //   method: 'GET',
    //   url: '/api/links'
    // })
    // .then(function (resp) {
    //   console.log('----------', resp);
    //   return resp.data;
    // });
  };

  var sendMessage = function(message) {
    console.log('sent message');
    return $http({
      method: 'POST',
      url: 'http://localhost:8000/message',
      data: {
        username: 'Jack',
        message: message
      }
    })
    .then(function (res) {
      return res.data;
    });
  };

  // var addLink = function (link) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: link
  //   });
  // };

  // var navToLink = function (link) {
  //   // var urlObj = {navlink: link.url};
  //   return $http({
  //     method: 'GET',
  //     url: '/api/links/' + link.code,
  //     data: link
  //   });
  // };

  return {
    getMessages: getMessages,
    sendMessage: sendMessage
  };
})
