exports.codify = function(message) {
  return message.split(' ');
}

var one = 'var WORD;'
var two = 'var WORD = WORD;'
var three = ''
var four = 'var WORD = function (WORD, WORD) {return WORD;};'

var holderString = 'var WORD = _.WORD = _.WORDWORD = function(WORD, WORD, \nWORD) {\nif (WORD == WORD) return WORD;\nif (WORD && WORD.WORD === WORDWORD) {\nWORD.WORDWORD(WORD, WORD);\n}\n}'

//send back an array of words
//angular recieves and then decides which div to show that message as


  //   else if (obj.length === +obj.length) {
  //     for (var i = 0, length = obj.length; i < length; i++) {
  //       if (iterator.call(context, obj[i], i, obj) === breaker) return;
  //     }
  //   } else {
  //     var keys = _.keys(obj);
  //     for (var i = 0, length = keys.length; i < length; i++) {
  //       if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
  //     }
  //   }
  //   return obj;
  // };
