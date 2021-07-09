import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, Dimensions, ImageBackground, Image, Alert, View , FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper';
import Color from 'color';
import * as D from './src/data/index';
import type * as T from './src/components/person/IPerson'
import TopBar from './src/components/TopBar';
import Content from './src/components/Content';
import BottomBar from './src/components/BottomBar';
import Person from './src/components/person/Person';
import { color } from 'react-native-reanimated';
import {Provider as ReduxProvider} from 'react-redux'
import store from './src/stores/Store';
import Home from './src/components/home/Home';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Home />
    </ReduxProvider>
  );
}