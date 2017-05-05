import React, {Component} from 'react';
import Header from './head/index';
import 'style/style.styl';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
