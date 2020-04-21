import React from 'react';
import FirstScreen from './src/screen/FirstScreen';
import {
 Text
} from 'react-native';
import NavigatorProvider from './src/navigator/mainNavigator';
import * as NavigationService from './src/navigator/NavigationService';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  state = {
    isLoaded: false,
  };

  async componentWillMount() {
    /**
     * add any aditional app config here,
     * don't use blocking requests here like HTTP requests since they block UI feedback
     * create HTTP requests and other blocking requests using redux saga
     */
    await this.loadAssets();
    
  }

  componentDidMount() {
    /**
     * Read above commments above adding async requests here
     */
    NavigationService.setNavigator(this.navigator);
  }

  loadAssets = async () => {
    // add any loading assets here
    
    this.setState({isLoaded: true});
  };

  renderLoading = () => (
    // <Layout style={[styles.flex]}>
      <Text>Loading</Text>
    // </Layout>
  );

  renderApp = () => (
        <NavigatorProvider
          style={[styles.flex]}
          ref={nav => {
            this.navigator = nav;
          }}>
          {/* <Layout style={[styles.flex]}> */}
            <FirstScreen />
          {/* </Layout> */}
        </NavigatorProvider>
  );

  render = () =>
    this.state.isLoaded ? this.renderApp() : this.renderLoading();
}

const styles = {flex: {flex: 1}};
