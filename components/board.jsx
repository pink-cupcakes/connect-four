import React from 'react';
import BoardSquare from './boardSquare';

const BoardView = () => {
  return (
    <div>
      {this.state.board.map((column, index) => {
        let fullCollumn = [];
        for (let i = 0; i < 7; i++) {
          if (fullCollumn[i])  {
            fullCollumn.push(<BoardSquare />)
          }
        }
      })}
    </div>
  )
};

export default BoardView;