function transform(collection, tranFunc) {
    return collection.map(tranFunc);
  }
  var numbers = [1, 2, 3, 4];

var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output); // [2, 4, 6, 8]