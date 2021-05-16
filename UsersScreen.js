import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from 'react-native-onboarding-custom-swiper';

const bhejde=async()=>{
  console.log('hogaya');
   const jsonValue = await AsyncStorage.getItem('@options')
    const x=JSON.parse(jsonValue);
    console.log('final: ');
    console.log(x);
    let ans=[]
    ans.push(x);
    console.log('Array me');
    console.log(ans);

    axios.post('http://172.16.67.126:3010/api-gateway/current-user/adduserinformation', x)
  .then(function (response) {
    console.log('Chali gai');
  })
  .catch(function (error) {
    console.log("nope:"+error);
  });
}

export default function Input() {
  return (
  <Onboarding pages={[Question2,Question3,Question4]} onDone={() => console.log('Hogaya')}  onDone={bhejde} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
