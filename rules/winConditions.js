const checkVertical = (arr, column, color) => {
  let vertical = arr[column].map(ele => ele);
  if (vertical.length < 3) {
    return false;
  };
  for (let i = 0; i < 4; i++) {
    if (vertical[vertical.length - 1] === color) {
      vertical.pop();
    } else {
      return false;
    };
  };
  return true;
};

const checkHorizontal = (arr, color) => {
  let board = arr.map(column => column.map(row => row));
  for (let i = 0; i < 6; i++) {
    let horizontal = board.map(column => column[i]);
    while (horizontal.length > 3) {
      if (horizontal[0] === color && horizontal[1] === color && horizontal[2] === color && horizontal[3] === color) {
        return true;
      } else {
        horizontal.shift();
      };
    };
  };
  return false;
};

const helperDiagonal = (arr, column, height, color) => {
  if (column > 2) {
    /*Bottom-left direction*/
    let bool = true;
    for (let i = 0; i < 4; i++) {
      if (arr[column - i][height - i] !== color) {
        bool = false;
      };
    };
    if (bool) {
      return true;
    };
    /*Top-left direction*/
    bool = true;
    for (let i = 0; i < 4; i++) {
      if (arr[column - i][height + i] !== color) {
        bool = false;
      };
    };
    if (bool) {
      return true;
    };
  };
  if (column < 4) {
    /*Bottom-right direction*/
    let bool = true;
    for (let i = 0; i < 4; i++) {
      if (arr[column + i][height - i] !== color) {
        bool = false;
      };
    };
    if (bool) {
      return true;
    };
    /*Top-right direction*/
    bool = true;
    for (let i = 0; i < 4; i++) {
      if (arr[column + i][height + i] !== color) {
        bool = false;
      };
    };
    if (bool) {
      return true;
    };
  };
  return false;
};

const checkDiagonal = (arr, color) => {
  let board = arr.map(column => column.map(row => row));
  /*Loop through board*/
  for (let i = 0; i < board.length; i++) {
    let vertical = i;
    for (let j = 0; j < board[vertical].length; j++) {
      let horizontal = j;
      if (helperDiagonal(arr, vertical, horizontal, color)) {
        console.log(vertical, horizontal)
        return true;
      };
    };
  };
  return false;
};

const gameOver = (arr, column, color) => {
  let isVertical = checkVertical(arr, column, color);
  let isHorizontal = checkHorizontal(arr, color);
  let isDiagonal = checkDiagonal(arr, color);

  return (isVertical || isHorizontal || isDiagonal);
}

module.exports.gameOver = gameOver;