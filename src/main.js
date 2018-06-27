import React from 'react';
import ReactDom from 'react-dom';
import {say} from 'cowsay';
import faker from 'faker';

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

    this.state = {
      content:  say({ text: "Hello" })
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleClick() {
    this.setState({
      content: say({text: faker.lorem.sentence()}),
    })
    
    let content = say({text: faker.lorem.sentence()});
    this.updateState(content);
  }

  updateState(content) {
   this.setState({content});
  }

 
  render() {
    return (
      <div>
        <React.Fragment>
          <Header />
          <div id="cow">
          <button onClick={this.handleClick}>Click Me </button>
          </div>
          <pre>{this.state.content}</pre>
          </React.Fragment>
        </div>
    );
  }

}

ReactDom.render(<App/>, document.getElementById('root'));