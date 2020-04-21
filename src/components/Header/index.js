import React, { Component } from 'react';
import { Icon, Header, Left, Body, Button, Title } from 'native-base';
export default class HeaderTitleExample extends Component {
  render() {
    const { title, isDisplayBack, backButtonClick } = this.props;
    return (
        <Header>
          { isDisplayBack &&
            <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => {backButtonClick()}}>
              <Icon name='arrow-back' />
            </Button>
            </Left>
          }
          
          <Body style={{ flex: 10 }}>
            <Title>{title}</Title>
          </Body>
        </Header>
    );
  }
}