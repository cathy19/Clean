import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions, Text} from 'react-native';

class Service extends Component{
    render(){
        return(
        <View>
            <Text style={styles.clean}>- 專業清洗 -</Text>
            <View style={styles.cleanList}>
                <View style={styles.cleanitem}>
                    <Text style={styles.cleantitle}>洗衣</Text>
                    <Image source={require('../../../img/clothes.jpg')} style={styles.cleanimg}></Image>
                </View>
                <View style={styles.cleanitem}>
                    <Text style={styles.cleantitle}>鞋子</Text>
                    <Image source={require('../../../img/shoes.jpg')} style={styles.cleanimg}></Image>
                </View>
                <View style={styles.cleanitem}>
                    <Text style={styles.cleantitle}>床單</Text>
                    <Image source={require('../../../img/bed.jpeg')} style={styles.cleanimg}></Image>
                </View>
                <View style={styles.cleanitem}>
                    <Text style={styles.cleantitle}>窗簾</Text>
                    <Image source={require('../../../img/curtain.jpg')} style={styles.cleanimg}></Image>
                </View>
            </View>
        </View>
        )
    }
}

const Widthscreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    clean:{
        textAlign:'center',
        color:'#888888',
        fontSize:14,
        marginTop: 15,
      },
      cleanList:{
        flexDirection:'row',
        marginTop: 10,
        marginBottom:10,
        paddingBottom: 10,
        borderBottomWidth:5,
        borderColor: '#F3F4FA',
        backgroundColor:'#FFFFFF'
      },
      cleanimg:{
        width:'60%',
        height:Widthscreen / 4 / 2,
      },
      cleanitem:{
        width:'25%',
        alignItems: 'center',
  
      },
      cleantitle:{
        textAlign:'center',
        marginBottom: 10,
        color:'#666666'
      },
})

export default Service;