import React from 'react';
import ReactDOM from 'react-dom';

import BoardView from './components/board.jsx';

import { Board } from './rules/board.js';
import css from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      board: new Board(),
      height: 7
    });
  }

  render() {
    return (
      <div>
        <div className="title">Connect Four</div>
        <BoardView board={this.state.board.grid} height={this.state.height} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));