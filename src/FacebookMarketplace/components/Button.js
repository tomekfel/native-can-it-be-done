import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { title } = this.props;

    return <Button title={{ title }} />;
  }
}
