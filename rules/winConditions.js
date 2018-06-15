const checkHorizontal = (arr, column, color) => {
  let height = arr[column].length - 1;
  if (column > 2) {
    let bool = true;
    for (let i = 1; i < 4; i++) {
      if (arr[column - i][height] !== color) {
        bool = false;
      };
    };
    if (bool) {
      return true;
    };
  };
  if (column < 4) {
    let bool = true;
    for (let i = 1; i < 4; i++) {
      if (arr[column + i][height] !== color) {
        bool = false;
      };
    };
    if (bool) {
      return true;
    };
  };
  return false;
};

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
}

const checkDiagonal = (arr, column, color) => {
  let height = arr[column].length - 1;
  if (column > 2) {
    /*Bottom-left direction*/
    let bool = true;
    for (let i = 1; i < 4; i++) {
      if (arr[column - i][height - i] !== color) {
        bool = false;
      };
    };
    if (bool) {
      return true;
    };
    /*Top-left direction*/
    bool = true;
    for (let i = 1; i < 4; i++) {
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
    for (let i = 1; i < 4; i++) {
      if (arr[column + i][height - i] !== color) {
        bool = false;
      };
    };
    if (bool) {
      return true;
    };
    /*Top-right direction*/
    bool = true;
    for (let i = 1; i < 4; i++) {
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

const winConditions = (arr, column, color) => {
  let horizontal = checkHorizontal(arr, column, color);
  let vertical = checkVertical(arr, column, color);
  let diagonal = checkDiagonal(arr, column, color);
  return (vertical || horizontal || diagonal);
}

module.exports.winConditions = winConditions;