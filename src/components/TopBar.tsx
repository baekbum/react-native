import React, { FC } from 'react'
import { useCallback } from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import * as D from '../data'

export type TopBarProps = {};

const TopBar: FC<TopBarProps> = () => {
  const add = useCallback(() => {Alert.alert('add')},[]);
  const deleteAll = useCallback(() => {Alert.alert('delete')},[]);
  return (
    <View style={[styles.topBar]}>
      <Text style={[styles.textButton]} onPress={add}>add</Text>
      <Text style={[styles.textButton]} onPress={deleteAll}>deleteAll</Text>
    </View>
  )
}

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between'
  },
  textButton: {fontSize: 20, color: 'white'},
})
