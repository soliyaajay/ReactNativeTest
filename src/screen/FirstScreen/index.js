import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header, Textbox, Button } from '../../components';
import { APIKEY } from '../../utils/staticString';
import { styles } from './styles';
import { Spinner } from 'native-base';

export default class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonDisable: true,
            asteroidID: ''
        };

    }

    async componentDidMount() {

    }

    handleChange = (value) => {
        if (value.length > 0) {
            this.setState({ asteroidID: value });
        } else {
            this.setState({ asteroidID: value });
        }
    }

    randomAsteroid = () => {
        return fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('responseJson',responseJson);
                var item = responseJson.near_earth_objects[Math.floor(Math.random() * responseJson.near_earth_objects.length)];
                console.log('item',item);
                this.getAsteroById(item.id);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getAsteroById(asteroidID) {
        return fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidID}?api_key=${APIKEY}`)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('responseJson',responseJson);
            this.props.navigation.navigate('DetailScreen',{userDetail:responseJson});
        })
        .catch((error) => {
            console.error(error);
        });
    }

    submitClick = (asteroidID) => {
        this.getAsteroById(asteroidID);
    }

    render() {
        const { asteroidID } = this.state;

        return (
            <View style={styles.mainViewStyle}>
                <Header title='Register Form' />
                <Textbox textFiledName='Enter Asteroid ID' onValueChange={(value) => this.handleChange(value)} textboxStyle={styles.textboxStyle} />
                <Button buttonTitle='Submit' buttonStyle={styles.buttonStyle} buttonClick={() => this.submitClick(this.state.asteroidID)} isButtonDisable={asteroidID.length > 0 ? false : true} />
                <Button buttonTitle='Random Asteroid' buttonStyle={styles.buttonStyle} isButtonDisable={false} buttonClick={() => this.randomAsteroid()} />

            </View>
        );
    }
}

