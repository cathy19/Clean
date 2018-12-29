import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {StackNavigator} from 'react-navigation'

import Tab from './src/Tab'
import Detail from './src/details/Detail'

const Appstacknavigation = StackNavigator({
  Tab:{
    screen:Tab,
    navigationOptions:{
      header:null
    }
  },
  Detail:{
    screen:Detail
  }
})

export default Appstacknavigation;
