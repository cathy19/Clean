import React, {Component} from 'react';
import { StyleSheet, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import Service from './homescreen/Service'
import Icons from './homescreen/Icons'
import Flash from './homescreen/Flash'

class Home extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Swiper
                style={styles.wrapper} 
                horizontal={true}
                autoplay={true} 
                showsPagination={false}
                >
                    <View style={styles.slide}>
                        <Image source={require('../../img/banner_1.jpg')} style={styles.img}></Image>
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../img/banner_2.jpg')} style={styles.img}></Image>
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../img/banner_3.jpeg')} style={styles.img}></Image>
                    </View>
                </Swiper>

                <Service />

                <Icons />

                <Flash/>
            </View>
        )
    }
}

const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    root:{
        height:580,
        backgroundColor:'#FFFFFF'
    },
    wrapper: {
        marginTop:30,
        height:ScreenWidth * 500 /1200,
        backgroundColor:'yellow',
      },
      slide: {
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        width:ScreenWidth,
        height:ScreenWidth * 500 /1200,
      },
      img:{
        width:ScreenWidth,
        height:ScreenWidth * 500 /1200,
      }
})

export default Home;