import React, { Component } from 'react'
import { Text, View, ScrollView,Button, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';


export default class GoodsDetail extends Component {
    constructor(){
        super();
        this.state={
            tits:[],
            pages:1,
            isAbled:true,
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page='+
            this.state.pages+'&limit=15')
        .then(res=>res.json())
            .then(res=>{
                this.setState({
                    tits:res.data
                })
            })
    }
    getData=()=>{
        
        if(this.state.pages==1){
            this.setState({
                isAbled:false
            })
        }else{
            this.setState({
                pages:this.state.pages-1,
                isAbled:true
            })
        }
        console.log(this.state.pages)
        fetch('https://cnodejs.org/api/v1/topics?page='+
            this.state.pages+'&limit=15')
            .then(res=>res.json())
                .then(res=>{
                    this.setState({
                        tits:res.data
                    })
                })

    }
    getNextData=()=>{
        this.setState({
            pages:this.state.pages+1,
            isAbled:true
        })
        fetch('https://cnodejs.org/api/v1/topics?page='+
            this.state.pages+'&limit=15')
            .then(res=>res.json())
                .then(res=>{
                    this.setState({
                        tits:res.data
                    })
                })
    }
    render() {
        
        return (
            <ScrollView>
                <View 
                    style={{
                        flex:1,
                        backgroundColor:'red',
                        height:50,
                        width:'100%',
                        alignItems:'center',
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}
                >
                    <Icon name='left' onPress={()=>Actions.pop()}/>
                    <Text 
                        style={{
                            alignItems:'center',
                            justifyContent:'space-around',
                            fontSize:20,
                            color:'#fff'
                        }}
                    >
                        我的发布
                    </Text>
                    <Icon name='right' style={{justifyContent:'flex-end'}}/>
                </View>
                
                <View style={{backgroundColor:'#fff'}}>
                {
                        this.state.tits.map((item)=>{
                            var tit=item.title.length>15?item.title.slice(0,15)+'……':item.title;
                            var timer=item.create_at.slice(0,10)
                            return(
                                <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-around',
                                        alignItems:'center',
                                        paddingTop:20
                                      }}
                                > 
                                    <Text style={{width:240}}>
                                        {tit}
                                    </Text>
                                    <Text>
                                        {timer}
                                    </Text>
                                    <Text>
                                        已回复
                                    </Text>
                            </View>
                            )}
                        )
                    }
                </View>
                <View style={{backgroundColor:'#fff',paddingTop:20,
                    flexDirection:'row',justifyContent:'center',paddingBottom:20}}>
                    {
                        this.state.isAbled?(<TouchableOpacity
                            onPress={this.getData}
                            style={{
                                width:100,
                                height:30,
                                backgroundColor:'skyblue',
                                borderRadius:10,
                                borderWidth:1,
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                            >
                                <Text>上一页</Text>
                            </TouchableOpacity>
                                
        ):(<View >
            <TouchableOpacity
            onPress={this.getData}
            style={{
                width:100,
                height:30,
                backgroundColor:'skyblue',
                borderRadius:10,
                borderWidth:1,
                alignItems:'center',
                justifyContent:'center',
            }}
            >
                
                <Text>上一页</Text>
            </TouchableOpacity>
            <Text style={styles.box}>已经是第1页了</Text>
            </View>
       )
                    }
                    <Text style={{fontSize:16,
                        marginLeft:40,marginRight:40}}>
                        {'第'+this.state.pages+'页'}
                    </Text>
                    <TouchableOpacity
                    onPress={this.getNextData}
                    style={{
                        width:100,
                        height:30,
                        backgroundColor:'skyblue',
                        borderRadius:10,
                        borderWidth:1,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    >
                        <Text>下一页</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    box:{
        position:'absolute',
        height:40,
        left:0,
        bottom:20,
        backgroundColor:'red',
        zIndex:2,
        fontSize:16,
        alignItems:'center'
    }
})
