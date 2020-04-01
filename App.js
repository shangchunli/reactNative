import React,{useState,useEffect} from 'react';
import {StyleSheet,View,BackHandler,Text,Image,ToastAndroid,
  AsyncStorage} from 'react-native';
import {Router,Scene,Overlay, Tabs,Drawer,Lightbox,
Modal} from 'react-native-router-flux'
import {Icon} from '@ant-design/react-native'
import SplashScreen from 'react-native-splash-screen'
import Home from './src/home/Home'
import Goods from './src/goods/Goods'
import Userinfor from './src/userinfor/Userinfor'
import Login from './src/common/Login';
import { Actions } from 'react-native-router-flux';
import Register from './src/common/Register';
import GoodsDetail from './src/userinfor/GoodsDetail';
import SwiperPage from './src/common/SwiperPage';


const styles=StyleSheet.create({

});

console.disableYellowBox=true

const rootUrl='https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';

const App = () => {
  let [isLogin,setLogin] = useState(false);
  let now =0;
  let [isInstall,setInstall] = useState(true);
  let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
  useEffect(()=>{
    init();
  },[])

  let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
  console.log(isLogin);
  
  return (
    <Router
      backAndroidHandler={()=>{
        if(Actions.currentScene =='home' || Actions.currentScene =='login'){
          if(new Date().getTime()-now<2000){
            BackHandler.exitApp();
          }else{
            ToastAndroid.show('确定要退出吗',100);
            now = new Date().getTime();
            return true;
          }
        }else{
          Actions.pop();
          return true;
        }
      }}
    >
		<Overlay>
      <Modal key='modal' hideNavBar>
        <Lightbox key='lightbox'>
          <Drawer
            key='drawer'
            drawerIcon={
              ()=><Icon name="menu-fold" size={20} color="blue"/>
            }
            contentComponent={()=><Text>drawer</Text>}
            drawerWidth={400}
          >
            <Scene key="root">
              <Tabs key='tabbar'
              hideNavBar
              activeTintColor='red'
              inactiveTintColor='blue'
              tabBarStyle={{backgroundColor:'#ccc'}}
              >
                <Scene title='首页' key='homePage' hideNavBar
                  icon={
                    ({focused})=><Icon 
                    color={focused?'red':'green'} name="home"/>
                  }
                >
                    <Scene  key='home' component={Home}/>
                </Scene>
                {/* 商品栏 */}
                <Scene 
                  title='商品'
                  key='goods' hideNavBar
                  component={Goods}
                  icon={
                    ({focused})=><Icon 
                    color={focused?'red':'green'} name="home"/>
                        }
                >
                  />
                </Scene>
                {/* 文档栏 */}
                <Scene  title='个人中心' hideNavBar
                  key='user' 
                  icon={
                    ({focused})=><Icon 
                    color={focused?'red':'green'} name="home"/>
                  }
                >
                  <Scene component={Userinfor} key='userPage'/>
                  <Scene key='publish' component={GoodsDetail} hideTabBar/>
                </Scene>
              </Tabs>
              <Scene initial={!isLogin} hideNavBar
                key="login" component={Login} />
              <Scene key="registerPage" hideNavBar
                component={Register} />
            </Scene>
          </Drawer>
        </Lightbox>
      </Modal>
	 </Overlay>
    </Router>
  );
};


export default App;
