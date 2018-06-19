import React from 'react';
import ReactDom from 'react-dom';
import Cowsay from 'cowsay';
import Faker from 'faker';

import './style/app.scss';

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }

}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleUp = this.handleUp.bind(this);
    this.updateState = this.updateState.bind(this);

    // SG: Make a reset value
    // SG: Care about the polarity
    this.state = {
      counter: 0,
    };
  }


  handleUp(e) {
    this.updateState(this.state.counter + 1);
  }


  updateState(counter) {
    let polarity = null;
    if (counter > 0) { polarity = 'positive'; }
    if (counter < 0) { polarity = 'negative'; }
    this.setState({ counter, polarity });
  }

  render() {
    return (
      <div>

        <Header />
        <div id="counterWrapper">
          <div id="cow" className={this.state.polarity}>{this.state.counter}</div>
          <a href="#" onClick={this.handleUp} id="up">Click Me</a>
        </div>
      </div>
    );
  }

}

ReactDom.render(<App/>, document.getElementById('root'));