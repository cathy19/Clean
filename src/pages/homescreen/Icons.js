import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

class Icons extends Component{
    render(){
        return(
            <View style={styles.icons}>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons 
                  name={'ios-book'}
                  size={30}
                  color={'#666666'}
                />
              </View> 
              <Text style={styles.icontitle}>服務介紹</Text>
            </View>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons 
                  name={'ios-aperture'}
                  size={30}
                  color={'#666666'}
                />
              </View> 
              <Text style={styles.icontitle}>服務範圍</Text>
            </View>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons 
                  name={'logo-bitcoin'}
                  size={30}
                  color={'#666666'}
                />
              </View> 
              <Text style={styles.icontitle}>價目中心</Text>
            </View>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons 
                  name={'ios-heart'}
                  size={30}
                  color={'#666666'}
                />
              </View> 
              <Text style={styles.icontitle}>意見反饋</Text>
            </View>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons 
                  name={'ios-people'}
                  size={30}
                  color={'#666666'}
                />
              </View> 
              <Text style={styles.icontitle}>團體洗衣</Text>
            </View>
          </View>
        )
    }
}

const Widthscreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    icons:{
        flexDirection:'row',
      },  
      iconitem:{
        width:'20%',
        alignItems:'center',
        marginBottom:20,
      },
      icontitle:{
        color:'#666666'
      },
      icon:{
        width:'60%',
        height:Widthscreen / 5 * 0.6,
        borderWidth: 1,
        borderColor:'rgba(0,0,0,0.5)',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 10,
      },
})

export default Icons;