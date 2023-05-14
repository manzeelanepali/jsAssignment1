// Write a program to convert given input to the expected output

// var input = {
//     '1': {
//       id: 1,
//       name: 'John',
//       children: [
//         { id: 2, name: 'Sally' },
//         { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
//       ]
//     },
//     '5': {
//       id: 5,
//       name: 'Mike',
//       children: [{ id: 6, name: 'Peter' }]
//     }
//   };
  
//   // To this
//   var output = {
//     '1': { id: 1, name: 'John', children: [2, 3] },
//     '2': { id: 2, name: 'Sally' },
//     '3': { id: 3, name: 'Mark', children: [4] },
//     '4': { id: 4, name: 'Harry' },
//     '5': { id: 5, name: 'Mike', children: [6] },
//     '6': { id: 6, name: 'Peter' }
//   };




function convert(input) {
    const output = {};
  
    // Helper function to traverse the input object recursively
    function traverse(obj) {
      const { id, name, children } = obj;
  
      // Create a new object with id, name, and children
      const newObj = { id, name };
  
      if (children) {
        // If the object has children, add their ids to the children array
        newObj.children = children.map(child => {
          // Recursively traverse each child object
          traverse(child);
  
          // Add the child's id to the current object's children array
          return child.id;
        });
      }
  
      // Add the new object to the output object
      output[id] = newObj;
    }
  
    // Traverse each object in the input object
    for (const key in input) {
      traverse(input[key]);
    }
  
    return output;
  }
  
  // Test the function with the given input
  const input = {
    '1': {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
      ]
    },
    '5': {
      id: 5,
      name: 'Mike',
      children: [{ id: 6, name: 'Peter' }]
    }
  };
  
  const output = convert(input);
  console.log(output);