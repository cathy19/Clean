import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

class Flash extends Component{
    render(){
        return(
             <View style={styles.flash}>
                <Image source={require('../../../img/sec3_banner.jpg')} style={styles.flashbg}></Image>
                <View>
                
                </View>
            </View>
        )
    }
}

const Widthscreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    flash:{
        width:'100%',
        height:Widthscreen / 3 * 1.3,
      },
      flashbg:{
        width:Widthscreen,
        height:Widthscreen * 215 / 500,
        resizeMode:'cover',
        opacity:0.5,
      }
})

export default Flash;