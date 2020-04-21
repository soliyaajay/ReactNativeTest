import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, View } from 'native-base';
export default class ButtonThemeExample extends Component {
  render() {
    const { buttonStyle,buttonTitle, isButtonDisable, buttonClick } = this.props;
    return (
        <View>
        {isButtonDisable &&
            <Button light style={buttonStyle} valueChange><Text> {buttonTitle} </Text></Button>
        }
        {!isButtonDisable &&
            <Button info style={buttonStyle} onPress={() => {buttonClick()}}><Text> {buttonTitle} </Text></Button>
        }
        </View>
    );
  }
}