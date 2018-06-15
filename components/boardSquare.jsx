import React from 'react';

const BoardSquare = (props) => {
  return props.square !== 'white' ? 
    <div className="square">
      <div className={props.square}></div>
    </div> : 
    <div className="square">
      <div className={props.completed ? "white" : "white clickable"} onClick={() => props.completed ? false : props.nextMove(props.index)}></div>
    </div>;
};

export default BoardSquare;