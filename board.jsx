import React from 'react';
import ReactDOM from 'react-dom';

import BoardColumn from './components/boardColumn.jsx';
import {winConditions} from './rules/winConditions.js';

import css from './style.css';

class BoardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [[], [], [], [], [], [], []],
      player: 'red',
      completed: false
    };

    this.nextMove = this.nextMove.bind(this);
  }

  nextMove(position) {
    let updateGrid = this.state.grid.map(ele => ele);
    updateGrid[position].push(this.state.player);
    this.setState({grid: updateGrid});
    if (winConditions(this.state.grid, position, this.state.player)) {
      this.setState({completed: true});
    } else {
      let updatePlayer = (this.state.player === 'red') ? 'yellow' : 'red';
      this.setState({player: updatePlayer});
    }
  }

  gameCompleted() {
    if (this.state.completed) {
      return <div>Player {this.state.player} has won.</div>
    }
  }

  startOver() {
    this.setState({
      grid: [[], [], [], [], [], [], []],
      player: 'red',
      completed: false
    })
  }

  render() {
    let completedMessage = (this.state.completed) ? 
      <h3 className="completedMessage" style={{color:this.state.player}}>Player {this.state.player} has won.</h3> :
      <h3 className="completedMessage">It is {this.state.player}'s turn.</h3>

    return (
      <div className="gameView">
        <button className="reset" onClick={() => {this.startOver()}}>Start Over</button>
        {completedMessage}
        <div className="board">
          {this.state.grid.map((column, index) => {
            return <BoardColumn column={column} index={index} nextMove={this.nextMove} completed={this.state.completed} />
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BoardView />, document.getElementById('board'));