function renderPattern(num) {
  for (let i = num; i > 0; i--) {
    let row = '';
    for (let j = i; j > 0; j--) {
      row += '* ';
    }
    console.log(row.trim());
  }
}


console.log(renderPattern(5))