import React, { Component } from "react";
import { StyledButton } from './styles';

export default class index extends Component {
  render() {
    return <StyledButton onClick={this.ola}>{this.props.children}</StyledButton>;
  }
  ola() {
    alert("Ola");
  }
}
