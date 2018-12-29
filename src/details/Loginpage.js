import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native'

class Loginpage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.logintxt}>您還沒登入，請登入!</Text>
        <View style={styles.btn}>
          <Button
            title="登入"
            onPress={() => this.props.navigation.navigate('Details')}
            color="#FFFFFF"
          />
        </View>
      </View>
    );
  }
}



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




export default Loginpage;

