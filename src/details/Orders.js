import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

class Orders extends Component{
    render(){
        return(
            <ScrollView style={styles.root}>
                <View style={styles.container}> 
                    <View style={styles.shirtitem}>
                        <Ionicons
                        size={26}
                        style={{ color:'#FF5511' }}
                        name={'ios-shirt'}
                        />
                        <Text style={styles.shirttxt}>洗衣</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>訂單編號：</Text>
                        <Text>123233243144</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>取件時間：</Text>
                        <Text style={styles.time}>2018年12月12日</Text>
                        <Ionicons
                            size={20}
                            style={{ color:'#3D84FB' }}
                            name={'ios-browsers'}
                        />
                        <Text>修改</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.shirtitem}>
                        <Ionicons
                        size={26}
                        style={{ color:'#FF5511' }}
                        name={'ios-shirt'}
                        />
                        <Text style={styles.shirttxt}>洗衣</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>訂單編號：</Text>
                        <Text>123233243144</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>取件時間：</Text>
                        <Text style={styles.time}>2018年12月12日</Text>
                        <Ionicons
                            size={20}
                            style={{ color:'#3D84FB' }}
                            name={'ios-browsers'}
                        />
                        <Text>修改</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.shirtitem}>
                        <Ionicons
                        size={26}
                        style={{ color:'#FF5511' }}
                        name={'ios-shirt'}
                        />
                        <Text style={styles.shirttxt}>洗衣</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>訂單編號：</Text>
                        <Text>123233243144</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>取件時間：</Text>
                        <Text style={styles.time}>2018年12月12日</Text>
                        <Ionicons
                            size={20}
                            style={{ color:'#3D84FB' }}
                            name={'ios-browsers'}
                        />
                        <Text>修改</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.shirtitem}>
                        <Ionicons
                        size={26}
                        style={{ color:'#FF5511' }}
                        name={'ios-shirt'}
                        />
                        <Text style={styles.shirttxt}>洗衣</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>訂單編號：</Text>
                        <Text>123233243144</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>取件時間：</Text>
                        <Text style={styles.time}>2018年12月12日</Text>
                        <Ionicons
                            size={20}
                            style={{ color:'#3D84FB' }}
                            name={'ios-browsers'}
                        />
                        <Text>修改</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.shirtitem}>
                        <Ionicons
                        size={26}
                        style={{ color:'#FF5511' }}
                        name={'ios-shirt'}
                        />
                        <Text style={styles.shirttxt}>洗衣</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>訂單編號：</Text>
                        <Text>123233243144</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>取件時間：</Text>
                        <Text style={styles.time}>2018年12月12日</Text>
                        <Ionicons
                            size={20}
                            style={{ color:'#3D84FB' }}
                            name={'ios-browsers'}
                        />
                        <Text>修改</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.shirtitem}>
                        <Ionicons
                        size={26}
                        style={{ color:'#FF5511' }}
                        name={'ios-shirt'}
                        />
                        <Text style={styles.shirttxt}>洗衣</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>訂單編號：</Text>
                        <Text>123233243144</Text>
                    </View>
                    <View style={styles.shirtitem}>
                        <Text>取件時間：</Text>
                        <Text style={styles.time}>2018年12月12日</Text>
                        <Ionicons
                            size={20}
                            style={{ color:'#3D84FB' }}
                            name={'ios-browsers'}
                        />
                        <Text>修改</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
    },
    container:{
        marginVertical:10,
    },
    shirtitem:{
        flexDirection:'row',
        // backgroundColor:'red',
        alignItems: 'center',
    },
    shirttxt:{
        fontSize:16,
        marginLeft: 5,
    },
    time:{
        marginRight:10,
    }
})

export default Orders;