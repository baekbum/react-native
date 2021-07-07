import React from 'react'
import {StyleSheet, View, Text, Image, ScrollView, FlatList} from 'react-native'
import {Colors} from 'react-native-paper'
import * as D from '../data'

const avatars = D.makeArray(100).map(() => {
  return D.randomAvatarUrl();
});

const title = 'Content'
export default function Content() {
  const children = avatars.map((url, index) => {
    return (
      <View key={index.toString()} style={styles.avatarView}>
        <Image style={styles.avatar} source={{uri: url}} />
      </View>
    )
  })

  return (
    <ScrollView contentContainerStyle={styles.view}>
      {children}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  view: {
    //flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //overflow: 'hidden',
    justifyContent: 'center',
    padding: 5, 
    //backgroundColor: Colors.blue700
  },
  text: {fontSize: 20, color: 'white'},
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 25}

})
