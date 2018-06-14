import React from 'react';

const BoardSquare = () => {
  if (this.props.square) {
    return (
      <div>{this.props.square}</div>
    )
  } else {
    return (
      <div>Blank</div>
    )
  }
};

export default BoardSquare;