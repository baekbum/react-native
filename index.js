import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import {Provider as ReduxProvider} from 'react-redux'
import store from './src/stores/Store';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
