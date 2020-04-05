import React, { Component } from 'react'
import {View,Text,Image,TextInput,ScrollView,Dimensions,
StyleSheet,TouchableOpacity,Button} from 'react-native'
import { Icon } from '@ant-design/react-native'
import Swiper from 'react-native-swiper';


const {width}=Dimensions.get('window');

export default class Home extends Component {
    render() {
        return (
            <ScrollView style={{width:width,height:700}}>
            <View >
                <View style={{backgroundColor:'red',height:70,paddingTop:20}}>
                    <View style={{backgroundColor:'red',
                        flexDirection:'row',height:40,justifyContent:'center'}}>
                        <View style=
                        {{
                        width:"80%",
                        marginRight:10,
                        backgroundColor:'#fbb8b8',
                        flexDirection:'row',
                        alignItems:'center',//竖轴居中
                        borderRadius:20,
                        paddingLeft:20
                        }}>
                        <Image source={require('../../assets/search.png')}/>
                        <TextInput placeholder='请输入您要搜索的关键字'  
                            placeholderTextColor='#fff'
                        />
                        </View>
                        <Icon
                        name='shopping-cart'
                        size='lg'
                        style={{                      
                        alignItems:'center',
                        justifyContent:'center'
                        }}
                        />
                    </View>
                </View>
                <View style={{height:200}}>
                    <Swiper>
                        <View style={styles.slide}>
                            <Image style={{width:width,height:200}}
                                source={require('../../assets/cour.png')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:width,height:200}}
                            source={require('../../assets/cour.png')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:width,height:200}}
                            source={require('../../assets/cour.png')}/>
                        </View>
                    </Swiper>
                </View>
                <View style={{width:width}}>
                    <View 
                        style={{height:80,backgroundColor:'#fff',
                    marginTop:10,flexDirection:'row'
                    ,alignItems:'center'}}
                    >
                        <Image style={{marginLeft:10,height:70,width:70,
                        justifyContent:'center',alignItems:'center'}}
                        source={require('../../assets/fir.png')}/>
                        <Text style={{alignItems:'center',fontSize:18,color:"#9a9a9a",
                            justifyContent:'center',marginLeft:20}}>
                            居家维修保养
                        </Text>
                        <Icon style={{marginLeft:'43%'}}
                            name='right'/>
                            
                    </View>
                    <View 
                        style={{height:80,backgroundColor:'#fff',
                    marginTop:10,flexDirection:'row'
                    ,alignItems:'center'}}
                    >
                        <Image style={{marginLeft:10,height:70,width:70,
                        justifyContent:'center',alignItems:'center'}}
                        source={require('../../assets/2.jpg')}/>
                        <Text style={{alignItems:'center',fontSize:18,color:"#9a9a9a",
                            justifyContent:'center',marginLeft:20}}>
                            住宿优惠
                        </Text>
                        <Icon style={{marginLeft:'50%'}}
                            name='right'/>
                    </View>
                    <View 
                        style={{height:80,backgroundColor:'#fff',
                    marginTop:10,flexDirection:'row'
                    ,alignItems:'center'}}
                    >
                        <Image style={{marginLeft:10,height:70,width:70,
                        justifyContent:'center',alignItems:'center'}}
                        source={require('../../assets/3.jpg')}/>
                        <Text style={{alignItems:'center',fontSize:18,color:"#9a9a9a",
                            justifyContent:'center',marginLeft:20}}>
                            出行接送
                        </Text>
                        <Icon style={{marginLeft:'50%'}}
                            name='right'/>
                    </View>
                    <View 
                        style={{height:80,backgroundColor:'#fff',
                    marginTop:10,flexDirection:'row'
                    ,alignItems:'center'}}
                    >
                        <Image style={{marginLeft:10,height:70,width:70,
                        justifyContent:'center',alignItems:'center'}}
                        source={require('../../assets/4.jpg')}/>
                        <Text style={{alignItems:'center',fontSize:18,color:"#9a9a9a",
                            justifyContent:'center',marginLeft:20}}>
                            E族活动
                        </Text>
                        <Icon style={{marginLeft:'50%'}}
                            name='right'/>
                    </View>
                    <View style={{
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:20}}>
                        <TouchableOpacity
                            style={{
                            width:width*0.8,
                            height:40,
                            backgroundColor:'red',
                            alignItems:'center',//左右居中
                            justifyContent:'center',//上下居中
                            borderRadius:10
                            }}
                            >
                            <Text 
                            style={{color:'#fff',fontSize:20}}>发布需求</Text>
                        </TouchableOpacity>
                        <Text style={{marginTop:30,
                            alignItems:'center',
                            justifyContent:'center',
                            fontSize:16,color:'#ccc'}}>
                            OE族之家 版权所有
                        </Text>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    slide:{
        width:width,
        height:200,
        justifyContent:'center',
        alignItems:'center'

    }
})

