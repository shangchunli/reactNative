import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,Image,TextInput,ScrollView} from 'react-native';
import {Icon} from '@ant-design/react-native'
const styles=StyleSheet.create({
  titl:{
    marginTop:10,
    marginLeft:30,
    marginRight:30,
    fontSize:18
  },
  titl1:{
    color:"red"
  },
  box:{
    width:'45%',
    height:350,
    backgroundColor:'#fff',
    margin:10,
    alignItems:'center',
    paddingTop:20
  },
  intro:{
    fontSize:18,
    marginTop:10,
    marginLeft:20
  },
  money:{
    color:'red',
    marginTop:10,
    fontSize:18,
    alignItems:'flex-start'
  }
});

const Goods = () => {
  return (
    <ScrollView>
    <View>
      {/* 白色背景部分 */}
        <View style={{height:120,alignItems:'center',
          backgroundColor:'#fff',width:'100%'}}>
          {/* 搜索框 */}
          <View style=
          {{
            width:"80%",
            height:40,
            backgroundColor:'#eeeeee',
            flexDirection:'row',
            alignItems:'center',//竖轴居中
            paddingLeft:20,
            marginTop:10,
          }}>
            <TextInput placeholder='请输入商品名称'/>
            {/* <Icon name='home'/> */}
            <Image style={{marginLeft:'55%'}}
            source={require('../../assets/search.png')}/>
          </View>
          

          
          {/* 标题栏 */}
          <View style={{width:'100%',height:40,marginTop:10,
            flexDirection:'row',justifyContent:'center'}}>
            <Text style={[styles.titl,styles.titl1]}>综合</Text>
            <Text style={styles.titl}>销量</Text>
            <Text style={styles.titl}>新品</Text>
            <Text style={styles.titl}>价格</Text>
            <Text style={styles.titl}>信用</Text>
          </View>
        </View>
        {/* 内容部分 */}
        <View style={{width:'100%',backgroundColor:'#f4f4f4',
          alignItems:'center'}}>
            <View style={{
            flexDirection:'row',
            justifyContent:'space-evenly',
            flexWrap:'wrap'
            }}>
            <View style={styles.box}>
              <Image source={require('../../assets/one.png')}/>
              <Text style={styles.intro}>
                Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
              </Text>
              <Text style={styles.money}>36.00</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('../../assets/two.png')}/>
              <Text style={styles.intro}>
                Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
              </Text>
              <Text style={styles.money}>36.00</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('../../assets/one.png')}/>
              <Text style={styles.intro}>
                Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
              </Text>
              <Text style={styles.money}>36.00</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('../../assets/two.png')}/>
              <Text style={styles.intro}>
                Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
              </Text>
              <Text style={styles.money}>36.00</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('../../assets/one.png')}/>
              <Text style={styles.intro}>
                Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
              </Text>
              <Text style={styles.money}>36.00</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('../../assets/two.png')}/>
              <Text style={styles.intro}>
                Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
              </Text>
              <Text style={styles.money}>36.00</Text>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
  )
};


export default Goods;
