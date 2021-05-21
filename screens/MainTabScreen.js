import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View } from 'react-native';
import {useTheme, Avatar} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => {
    return(
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        // barStyle={{ backgroundColor: 'tomato' }}
         >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#FF6347',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="notification"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-notifications" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#694fad',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor: '#d02860',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-aperture" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>

    );
};



const HomeStackScreen = ({navigation}) =>(
  
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#fff',
        elevation:0
      },
      
        headerTintColor:'#333',
        HeaderTitleStyle:{
          fontWeight:'bold'
      }
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      
      headerLeft: () => (
        <View style={{marginLeft:10}}>
          <Icon.Button name='ios-menu' size={25} color='#333'
        backgroundColor='#fff' onPress={() => navigation.openDrawer()}></Icon.Button>
        </View>
        
      ),
      headerRight: () =>(
        <View style={{flexDirection:'row',marginRight:10}}>
          <Icon.Button name='ios-search' size={25} color='#333'
        backgroundColor='#fff' onPress={() => navigation.openDrawer()}></Icon.Button>
        <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}} onPress={()=>{}}>
          <Avatar.Image
            source={{
              uri:
                'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
            }}
            size={30}
          />
        </TouchableOpacity>
               
        </View>
        
      ),
    }}/>
   
  </HomeStack.Navigator> 
  
  );
  
  const DetailsStackScreen = ({navigation}) =>(
    
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#1f65ff',
      },
      
        headerTintColor:'#fff',
        HeaderTitleStyle:{
          fontWeight:'bold'
      }
    }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={25}
        backgroundColor='#1f65ff' onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}/>
   
  </DetailsStack.Navigator> 
  
  );
  const ProfileStackScreen = ({navigation}) =>(
    
    <ProfileStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#694fad',
      },
      
        headerTintColor:'#fff',
        HeaderTitleStyle:{
          fontWeight:'bold'
      }
    }}>
    <ProfileStack.Screen name="Details" component={ProfileScreen} options={{
      
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={25}
        backgroundColor='#694fad' onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}/>
   
  </ProfileStack.Navigator> 
  
  );
  export default MainTabScreen;