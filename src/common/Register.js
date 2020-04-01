import React, { Component } from 'react'
import {View, Text, Image, TextInput,AsyncStorage, TouchableOpacity, ToastAndroid} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Register extends Component {
    constructor(){
      super();
      this.state = {
          username:'',
          pwd:'',
          isloading:false
      }
    }
    userhandle = (text)=>{
      this.setState({username:text})
  }
  pwdhandle = (text)=>{
      this.setState({pwd:text})
  }

    login=()=>{
      if(this.state.username==''||this.state.pwd==''){
        ToastAndroid.show('请填写完整信息',20)
      }else {
        this.setState({isloading:true})
        myFetch.post('/register',{
            username:this.state.username,
            pwd:this.state.pwd}
        )
        .then(res=>{
          if(!res.data.token){
            ToastAndroid.show('注册失败',20);
            Actions.pop();
          }else{
            ToastAndroid.show('注册成功',20)
            Actions.pop()
          }
          // if(JSON.stringify(res.data))
            // 根据返回状态进行判断，正确时跳转首页
            // if(res){

            // }
        //     AsyncStorage.setItem('user',JSON.stringify(res.data))
        //         .then(()=>{
        //             this.setState({isloading:false})
        //             Actions.pop();
        //         })
        })
      }
       
    } 

    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
            <View
              style={{ alignItems: 'center'}}>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput placeholder="填写用户名" 
                    onChangeText={this.userhandle}
                />
              </View>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput 
                    onChangeText={this.pwdhandle}
                    placeholder="填写密码" 
                />
              </View>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity 
                    style={{
                        width: '30%',
                        height: 40,
                        backgroundColor: '#ccc',
                        margin: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={this.login}> 
                    <Text>注册</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        width: '30%',
                        height: 40,
                        backgroundColor: '#ccc',
                        margin: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={this.login}> 
                    <Text>登录</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
        } 
}
