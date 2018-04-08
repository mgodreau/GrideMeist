import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor
    };
    console.log(this.props);
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
