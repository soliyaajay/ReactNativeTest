import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header, Textbox, Button } from '../../components';
import { APIKEY } from '../../utils/staticString';
import { styles } from './styles';
import { Label } from 'native-base';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetail: {},
        };

    }

    async componentDidMount() {
        this.setState({userDetail: this.props.navigation.state.params.userDetail})
    }

    backButtonClick = () => {
        this.props.navigation.goBack(null);
    }

    render() {
        const { userDetail } = this.state;
        console.log('userDetail',userDetail.is_potentially_hazardous_asteroid);
        
        return (
            <View style={styles.mainViewStyle}>
                <Header title='Detail Screen' isDisplayBack = {true} backButtonClick={() => {this.backButtonClick()}}/>
                <View style={styles.contentContainerSttle}>
                <Label style={styles.labelStyle}>Name:</Label>
                <Label style={styles.labelStyle}>{userDetail.name}</Label>
                </View>
                <View style={styles.contentContainerSttle}>
                <Label style={styles.labelStyle}>nasa_jpl_url:</Label>
                <Label  style={styles.labelStyle}>{userDetail.nasa_jpl_url}</Label>
                </View>
                <View style={styles.contentContainerSttle}>
                <Label style={styles.labelStyle}>is_potentially_hazardous_asteroid</Label>
                <Label style={styles.labelStyle}>{userDetail.is_potentially_hazardous_asteroid ? 'True' : 'False'}</Label>
                </View>
                
            </View> 
        );
    }
}

