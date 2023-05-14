// Write a function that searches for an object by a specific key value in an array of objects:
// var fruits = [
//     {id: 1, name: 'Banana', color: 'Yellow'},
//     {id: 2, name: 'Apple', color: 'Red'}
// ]

// searchByName(fruits, 'apple');
// Should return: {id: 2, name: 'Apple', color: 'Red'}

// Also try searchByKey(fruits, 'name', 'apple');


function searchByName(array, name) {
    name = name.toLowerCase();
    return array.find(obj => obj.name.toLowerCase() === name);
  }


console.log(searchByName(fruits, 'apple'));






function searchByKey(array, key, value) {
    value = value.toLowerCase();
    return array.find(obj => obj[key].toLowerCase() === value);
  }

  var fruits = [
        {id: 1, name: 'Banana', color: 'Yellow'},
        {id: 2, name: 'Apple', color: 'Red'}
    ];
  console.log(searchByKey(fruits, 'name', 'apple'));