import React from 'react';
import BoardSquare from './boardSquare';

const BoardColumn = (props) => {
  /*Generate full array with empty cells for React to map*/
  let fullColumn = [];
  for (let i = 0; i < 6; i++) {
    fullColumn.push(props.column[i] ? props.column[i] : 'white');
  };

  return (
    <div className="column">
      {fullColumn.map((square, index) => {
        return <BoardSquare square={square} nextMove={props.nextMove} index={props.index} completed={props.completed} />
      })}
    </div>
  )
};

export default BoardColumn;