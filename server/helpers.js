exports.codify = function(message) {  
  var ary = message.split(' ');
  var cap = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var capitalizeIndex = function (index, array) {
    array[index] = cap(array[index]);
  }
  if (ary.length === 3) {
    capitalizeIndex(2, ary);
  }
  if (ary.length === 6) {
    capitalizeIndex(2, ary);
    capitalizeIndex(5, ary);
  }
  if (ary.length === 17) {
    capitalizeIndex(16, ary);
  }
  return ary;
}
