import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions, Image, AsyncStorage} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Button from 'apsl-react-native-button'

import Order from '../pages/Order'


class DetailsScreen extends Component {

  state = {
    sendCodeBtn:'發送驗証碼',
    tel:'123',
    code:'',
    pressbtn:1,
  }
  
  sendcode = () => {
  //  fetch('http://xxxx.com/a.php',{
  //    method:'POST',
  //    body:JSON.stringify({
  //      tel:tel.state.tel
  //    })
  //  }).then( x => {

  //  })
    if(this.state.pressbtn == 0){
      return
    }
    this.setState({
      pressbtn:0
    })
   let time = 3 ;
   let timer = setInterval(() =>{
      this.setState({
        sendCodeBtn: time+ '秒'
      })
      if(time==0){
        this.setState({
         sendCodeBtn:'發送驗証碼',
         pressbtn:1
        })
        clearInterval(timer);
      }
      time--;

   },1000)
  }

  login = () => {
    let tel = this.state.tel;
    let code = this.state.code;
    if(tel && code == "" ){
      alert('其中欄位不得為空')
      return false;
    }else{
      AsyncStorage.setItem('isLogin',tel, ()=>{
        AsyncStorage.setItem('token', tel, ()=>{
          this.props.navigation.navigate('Order')
        })
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../img/bobo.jpeg')} style={styles.bg}/>
        <View style={styles.root}>
          <View style={styles.in}>
            <Ionicons
                  size={26}
                  style={{ color:'#777' }}
                  name={'ios-person'}
              />
            <TextInput 
              style={styles.input} 
              keyboardType='phone-pad'
              placeholder="手機號碼"
              onChangeText ={(d) =>{
                this.setState({
                  tel:d
                })
              }}
              />
              <Button 
                style={styles.sendbtn} 
                textStyle={styles.sendtxt} 
                onPress={this.sendcode}
                >
              {this.state.sendCodeBtn}
              </Button>
          </View>
          <View style={styles.in}>
            <Ionicons
                    size={26}
                    style={{ color:'#777' }}
                    name={'ios-key'}
                />
            <TextInput 
              style={styles.input} 
              placeholder="驗証碼"
              keyboardType="numeric"
              onChangeText = {(x) => {
                this.setState({
                  code:x
                })
              }}
              /> 
            <Button 
              style={styles.btn} textStyle={styles.btntxt}
              onPress={this.login}
              >
              登入
            </Button> 
          </View>
        </View>
      </View>
    );
  }
}

const ScreenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
  },
  bg:{        
    position:'relative',
    opacity:0.2,
  },
  root:{
    position:'absolute',
  },
  in:{
    flexDirection:'row'
  },
  input:{
    width:ScreenWidth / 2,
    borderColor:'#AAAAAA',
    borderWidth: 1,
    padding:6,
    color:'#999',
    marginBottom: 10,
    marginLeft: 10,
  },
  sendbtn:{
    width:'22%',
    height:30,
    marginLeft:5,
    borderColor:'#45C1F8'
  },
  sendtxt:{
    fontSize:10, 
    fontWeight: 'bold',
    color:'#45C1F8'
  },
  btn:{
    position:'absolute',
    top:50,
    width:'100%',
    padding:8,
    borderWidth:1,
    borderColor: '#49B9FC',
    backgroundColor:'#49B9FC',
    borderRadius: 20,
    height:30,
   
  },
  btntxt:{
    color:'#FFFFFF',
    fontSize:14, 
  }
})

  export default DetailsScreen;