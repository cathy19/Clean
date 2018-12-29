import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

class MyCenter extends Component{
    render(){
        return(
            <View style={styles.mycontainer}>
               <View style={styles.top}>
                    <Image source={require('../../img/my_banner.jpg')} style={styles.topbg}></Image>
                    <View style={styles.in}>
                        <View style={styles.left}>
                            <Image source={require('../../img/timg.jpeg')} style={styles.userpic}></Image>
                            <View style={styles.leftin}>
                                <Text style={styles.gologin}>立即登入</Text>
                                <Text style={styles.desc}>讓生活更自在</Text>
                            </View>
                        </View>
                        <Text style={styles.right}>充值 ></Text>
                    </View>
               </View>

               <View style={styles.wallet}>
                    <View style={styles.wLeft}>
                        <Ionicons 
                        name={'ios-wallet'}
                        size={24}
                        color={'#F3B294'}
                        />
                        <Text style={styles.wtxt}>我的錢包</Text>
                    </View>
                    <Text style={styles.wRight}>開發票</Text>
               </View>

                <View style={styles.account}>
                    <View style={styles.accitem}>
                        <Text style={styles.accnumber}>0張</Text>
                        <Text style={styles.accdesc}>優惠卷</Text>
                    </View>
                    <View style={styles.accitem}>
                        <Text style={styles.accnumber}>NT. 0</Text>
                        <Text style={styles.accdesc}>餘額</Text>
                    </View>
                    <View style={styles.accitem}>
                        <Text style={styles.accnumber}>0 張</Text>
                        <Text style={styles.accdesc}>信用卡</Text>
                    </View>
                    <View style={styles.accitem}>
                        <Text style={styles.accnumber}>0 點</Text>
                        <Text style={styles.accdesc}>點數</Text>
                    </View>
                </View>

                <View style={styles.others}>
                    <View style={styles.oitem}>
                        <Ionicons 
                            name={'ios-disc'}
                            size={24}
                            color={'#46C6E0'}
                            />
                        <View style={styles.otxt}>
                            <Text>常用地址</Text>
                            <Text>></Text>
                        </View>
                    </View>
                    <View style={styles.oitem}>
                        <Ionicons 
                            name={'ios-heart'}
                            size={24}
                            color={'#EEAFC1'}
                            />
                        <View style={styles.otxt}>
                            <Text>推薦有獎</Text>
                            <Text>></Text>
                        </View>
                    </View>
                    <View style={styles.oitem}>
                        <Ionicons 
                            name={'ios-gift'}
                            size={24}
                            color={'#5DD783'}
                            />
                        <View style={styles.otxt}>
                            <Text>積分商城</Text>
                            <Text>></Text>
                        </View>
                    </View>
                </View>

                <View style={styles.others}>
                    <View style={styles.oitem}>
                        <Ionicons 
                            name={'ios-paper-plane'}
                            size={24}
                            color={'#46C6E0'}
                            />
                        <View style={styles.otxt}>
                            <Text>意見反饋</Text>
                            <Text>></Text>
                        </View>
                    </View>
                    <View style={styles.oitem}>
                        <Ionicons 
                            name={'ios-create'}
                            size={24}
                            color={'#EEAFC1'}
                            />
                        <View style={styles.otxt}>
                            <Text>更多</Text>
                            <Text>></Text>
                        </View>
                    </View>
                </View>

                <View style={styles.service}>
                    <Ionicons 
                        name={'ios-call'}
                        size={24}
                        color={'#4BCCE6'}
                        />
                    <Text>客服連繫</Text>
                </View>
            </View> 
        )
    }
}

const Widthscreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mycontainer:{
        marginTop:30,
        backgroundColor:'#FFFFFF',
        height:Dimensions.get('window').height - 60 - 30,
    },
    top:{
        width:'100%',
        height:Widthscreen / 3,
        position:'relative',
    },
    topbg:{
        width:'100%',
        height:Widthscreen / 3,
        opacity:0.6,
    },
    in:{
        width:'100%',
        height:Widthscreen / 3,
        position:'absolute',
        top:0,
        left:0,
        // backgroundColor:'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    left:{
        width:'40%',
        height:Widthscreen / 4,
        // backgroundColor:'blue',
        marginLeft: 20,
        flexDirection:'row',
        alignItems: 'center',
    },
    right:{
        // backgroundColor:'red', 
        color:'red',
        marginRight: 20,
    },
    userpic:{
        width:Widthscreen / 7,
        height:Widthscreen / 7,
        borderRadius: Widthscreen / 14 ,
    },
    leftin:{
        marginLeft:5,
    },
    gologin:{
        fontSize:18,
        color:'rgba(0,0,0,0.7)',
        marginBottom: 10,
    },
    desc:{
        color:'rgba(0,0,0,0.5)'
    },
    wallet:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:50,
    },
    wLeft:{
        flexDirection:'row',
        alignItems:'center',
        color:'rgba(0,0,0,0.5)',
        marginLeft: 20,
    },
    wtxt:{
        color:'rgba(0,0,0,0.6)',
        marginLeft: 10,
    },
    wRight:{
        color:'#2BE8F6',
        marginRight: 20,
    },
    account:{
        height:60,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        borderTopColor:'rgba(0,0,0,0.2)',
        borderTopWidth:1,
    },
    accitem:{
        width:'25%',
    },
    accnumber:{
        fontSize:13,
        color:'rgba(0,0,0,0.6)',
        textAlign:'center',
        marginBottom:5,
    },
    accdesc:{
        color:'rgba(0,0,0,0.7)',
        textAlign:'center',
    },
    others:{
        borderBottomColor:'rgba(0,0,0,0.05)',
        borderTopColor:'rgba(0,0,0,0.05)',
        borderTopWidth: 6,
        borderBottomWidth: 6,
    },
    oitem:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
    },
    otxt:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
        marginLeft:5,
    },
    service:{
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
})

export default MyCenter;