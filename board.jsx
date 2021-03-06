import React from 'react';
import ReactDOM from 'react-dom';

import BoardColumn from './components/boardColumn.jsx';
import {gameOver} from './rules/winConditions.js';

class BoardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.nextMove = this.nextMove.bind(this);
  }

  nextMove(position) {
    /*Add new player move to current grid*/
    let updateGrid = this.state.grid.map(ele => ele);
    updateGrid[position].push(this.state.player);
    this.setState({grid: updateGrid});

    /*Check game status for updated grid*/
    if (gameOver(this.state.grid, position, this.state.player)) {
      /*Update state if game is finished, retain current player state for 'win message'.*/
      this.setState({completed: true});
    } else {
      /*Update player to next player if the game is not finished*/
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

  componentWillMount() {
    this.startOver();
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