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
    this.setState({ board: new Board()});
  }

  render() {
    return (
      <div>
        <div className="title">Connect Four</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));