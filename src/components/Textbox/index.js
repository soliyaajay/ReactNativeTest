import React, { Component } from 'react';
import { Container,  Content, Input, Item } from 'native-base';
import { Header } from '../Header';
export default class RegularTextboxExample extends Component {
  render() {
    const { textFiledName, textboxStyle, onValueChange } = this.props;
    return (
        <Item regular style={textboxStyle}>
          <Input placeholder={textFiledName}
          onChangeText={(value) => {onValueChange(value)}}/>
        </Item>
    );
  }
}