export default class Board {
  constructor() {
    this.grid = [[], [], [], [], [], [], []];
    this.player = ''
  };

  firstPlayer(color) {
    this.player = color;
  }

  addPiece(position) {
    grid[position].push(this.player);
    if (this.player === 'blue') {
      this.player = 'red';
    } else {
      this.player = 'blue';
    };
  }
}

module.exports.Board = Board;