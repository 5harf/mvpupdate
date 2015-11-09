angular.module('codeChat.services', [])

.factory('Send', function ($http) {
  // Your code here
  var getMessages = function () {

    return [
    {username: 'Jackson', message: 'Hello, how is the weather today in San Francisco?', createdAt: 5},
    {username: 'Jackson', message: 'Hello, how is the weather today in San Francisco?', createdAt: 5},
    {username: 'Jackson', message: 'Hello, how is the weather today in San Francisco?', createdAt: 5}
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
