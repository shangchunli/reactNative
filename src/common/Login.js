import React, {Component} from 'react';
import {View, Text, Image, TextInput,AsyncStorage, ToastAndroid,
  TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Login extends Component {
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
    login = ()=>{
      if(this.state.username==''||this.state.pwd==''){
        ToastAndroid.show('请填写完整信息',20)
      }else{
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        )
        .then(res=>{
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.homePage();
                })
        })
      }
    } 
    register=()=>{
      Actions.registerPage();
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
            <TextInput placeholder="用户名" 
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
                placeholder="密码" 
                secureTextEntry={true}
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
                    justifyContent: 'center',
                }}
                onPress={this.login}> 
                <Text>登录</Text>
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
                onPress={this.register}> 
                <Text>注册</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
            this.state.isloading
            ?<View style={{flexDirection:'row',
              justifyContent:'center',alignItems:'center'}}>
              <Text style={{
                backgroundColor:'red',
                width:100,
                height:50,
                lineHeight:50,
                textAlign:'center'
                }}
              >
                正在登录....
                </Text>
              </View>
            :null
        }
      </View>
    );
  }
}
