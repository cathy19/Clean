import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, AsyncStorage} from 'react-native'
import { StackNavigator } from 'react-navigation';

import DetailsScreen from '../details/Loginscreen'
import Orders from '../details/Orders'
import Loginpage from '../details/Loginpage'

class Order extends Component {

  componentWillMount(){
    AsyncStorage.getItem('isLogin', (tel) => {
      console.log(tel)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Loginpage navigation={this.props.navigation}/>
      </View>
    );
  }
}


const OrderStack = StackNavigator({
  Order: { screen: Order,
    navigationOptions:{
      title:'未登入',
      headerStyle:{
        backgroundColor:'#3EBDFE'
      },
      headerTintColor:'#fff'
    }
   },
  Details: { screen: DetailsScreen,
    navigationOptions:{
      title:'登入',
      headerStyle:{
        backgroundColor:'#3EBDFE'
      },
      headerTintColor:'#fff'
    } },
});

const styles = StyleSheet.create({
  btn:{
    width:'30%',
    backgroundColor:'#3EBDFE',
    borderRadius: 20,
  },
  logintxt:{
    marginBottom:10,
    color:'#666666',
  }
})




export default OrderStack;

