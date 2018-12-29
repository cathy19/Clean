import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './pages/Home'
import Order from './pages/Order'
import MyCenter from './pages/MyCenter'

const Tabnavigation  = TabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
         tabBarLabel:'首頁',
         tabBarIcon:({tintColor, focused}) => (
             <Ionicons
                 size={26}
                 style={{ color:tintColor }}
                 name={'ios-home'}
             />
         ) 
     }
    },
    Order:{
        screen:Order,
        navigationOptions:{
            tabBarLabel:'訂單',
            tabBarIcon:({tintColor, focused}) => (
                <Ionicons
                    size={26}
                    style={{ color:tintColor }}
                    name={'ios-cart'}
                />
            ) 
        }
    },
    MyCenter:{
        screen:MyCenter,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor, focused}) => (
                <Ionicons
                    size={26}
                    style={{ color:tintColor }}
                    name={'ios-contact'}
                />
            ) 
        }
    },
},{
    tabBarOptions:{
        showIcon:true,
        style:{
            backgroundColor:'white',
            borderWidth:1,
            borderColor:'#B4B4B4',
            height:60,
        },
        activeTintColor:'#2DDAF2',
        inactiveTintColor:'#C2CDDF'
    },
    tabBarPosition:'bottom',
})

export default Tabnavigation;