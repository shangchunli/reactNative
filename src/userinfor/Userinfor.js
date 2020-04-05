import React, { Component } from 'react'
import {View,Text,Dimensions,Image,FlatList, ScrollView, 
    TouchableOpacity,AsyncStorage} from 'react-native'
import { Icon } from '@ant-design/react-native'
import {Actions} from 'react-native-router-flux'
import ImagePicker from 'react-native-image-picker';


const {width}=Dimensions.get('window');
console.log(width);


const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const funs=[
    {
        name:'key',
        tits:'账户管理'
    },
    {
        name:'table',
        tits:'收货地址'
    },
    {
        name:'link',
        tits:'我的信息'
    },
    {
        name:'home',
        tits:'我的订单'
    },
    {
        name:'code',
        tits:'我的二维码'
    },
    {
        name:'picture',
        tits:'我的积分'
    },
    {
        name:'table',
        tits:'我的收藏'
    },
]

const funs1=[
    {
        name:'home',
        tits:'居家维修保养'
    },
    {
        name:'menu',
        tits:'出行接送'
    },
    {
        name:'audio',
        tits:'我的受赠人'
    },
    {
        name:'form',
        tits:'我的住宿优惠'
    },
    {
        name:'line',
        tits:'我的活动'
    },
    {
        name:'home',
        tits:'我的发布',
    },

]
let source;
export default class Userinfor extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:require('../../assets/header.jpg')
        }
    }
    takephoto=async ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                
              source = { uri: response.uri };
              console.log(typeof(source))
              this.setState({
                imageUrl: source,
              });
            }
          });
       

    }
    render() {    
        return (
            <ScrollView style={{width:width}}>
                <View style={{flex:1}}>
                    
                    <View 
                        style={{backgroundColor:'#f23030',
                        height:210,width:width,justifyContent:'center',
                        alignItems:'center'}}
                    >
                        <TouchableOpacity onPress={this.takephoto}>
                            <Image style={{height:160,width:width*0.3,borderRadius:width*0.3,borderWidth:1}}
                            source={
                                this.state.imageUrl
                                }/>
                        </TouchableOpacity>
                        <Text style={{color:'#fff',fontSize:20}}>
                            BINNU DHILLON
                        </Text>  
                    </View>
                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row',
                            alignItems:'center',marginTop:20}}
                        >
                            <Icon style={{marginLeft:10}} name='number'/>
                            <Text style={{marginLeft:10,fontSize:18}}>
                                我的个人中心
                            </Text>
                        </View>
                        
                        <View 
                            style={{
                                borderBottomColor:'#ccc',
                                borderBottomWidth:2,
                                marginTop:15
                            }}
                        >

                        </View>
                        <View style={{width:width,alignItems:'center',
                    alignItems:'center'}}>
                            <FlatList 
                                
                                data={funs}
                                numColumns={3}
                                renderItem={({item})=>
                                <View 
                                style={{justifyContent:'center',
                                alignItems:'center',height:100,width:width*0.3}}>
                                    <Icon style={{marginTop:10}} size='lg'
                                        name={item.name}/>
                                    <Text style={{marginTop:10,fontSize:16}}>
                                        {item.tits}
                                    </Text>
                                </View>}
                            />
                        </View>
                        
                    </View>
                    
                    <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    
                        <View style={{flexDirection:'row',
                            alignItems:'center',marginTop:20}}
                        >
                            <Icon style={{marginLeft:10}} name='home'/>
                            <Text style={{marginLeft:10,fontSize:18}}>
                                E族活动
                            </Text>
                        </View>
                        
                        <View 
                            style={{
                                borderBottomColor:'#ccc',
                                borderBottomWidth:2,
                                marginTop:15
                            }}
                        >

                        </View>

                        <View style={{width:width,alignItems:'center',
                            alignItems:'center'}}>
                            <FlatList 
                                data={funs1}
                                numColumns={3}
                                renderItem={({item})=>
                                <TouchableOpacity onPress={()=>Actions.publish()} 
                                style={{justifyContent:'center',
                                    alignItems:'center',height:90,width:width*0.3}}
                                >
                                    <Icon style={{marginTop:10}} size='lg'
                                        name={item.name}/>
                                    <Text style={{marginTop:10,fontSize:16}}>
                                        {item.tits}
                                    </Text>
                                </TouchableOpacity>}
                            />
                        
                        </View>
                    </View>

                    <View style={{
                        height:90,
                        alignItems:'center',
                        justifyContent:'center'}}>
                        <TouchableOpacity style={
                            {
                            alignItems:'center',
                            justifyContent:'center',
                            fontSize:18,color:'#000'}}
                            onPress={()=>{Actions.login({tag:false});AsyncStorage.clear()}}
                        >
                            <Text> 退出</Text>
                           
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
