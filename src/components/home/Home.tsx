import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, Dimensions, ImageBackground, Image, Alert, View , FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper';
import Color from 'color';
import * as D from '../../../src/data/index';
import type * as T from '../../../src/components/person/IPerson'
import TopBar from '../../../src/components/TopBar';
import Content from '../../../src/components/Content';
import BottomBar from '../../../src/components/BottomBar';
import Person from '../../../src/components/person/Person';
import { color } from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux'
import { useCallback } from 'react';
import { useEffect } from 'react';
import * as actions from '../../../src/stores/person/Action';
import type { reducer } from '../../../src/stores/Store';
import type { state } from '../../../src/stores/person/Types';

export default function App() {
  const dispatch = useDispatch();
  const peopleList = useSelector<reducer, state>(state => state.personReducer);

  useEffect(() => {
    const people: T.IPerson[] = D.makeArray(10).map(() => D.createRandomPerson());

    dispatch(actions.addPerson(people));
  }, []);

  const onPressed = useCallback(() => {
    Alert.alert('onPressed');
  }, []);

  return (
    <>
        <SafeAreaView style={styles.flex}>
            <TopBar />
            {peopleList.length > 0 &&
                <FlatList 
                data={peopleList}
                renderItem={({item}) => <Person person={item} />}
                keyExtractor={(item, index) => item.id }
                ItemSeparatorComponent={() => <View style={[styles.itemSeparator]} />}
                />
            }            
            <BottomBar />
        </SafeAreaView>
        <View style={[styles.absoluteView]} >
            <Icon name='feather' size={30} color='white' onPress={onPressed} />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.lightBlue100
  },
  absoluteView: {
    backgroundColor: Colors.purple300,
    position: 'absolute',
    bottom: Platform.select({ios: 100, android: 80}),
    right: 30,
    padding: 10,
    borderRadius: 35
  },
  itemSeparator: {
    borderWidth: 1,
    borderColor: Color(Colors.grey900).lighten(0.1).string()
  }
});
