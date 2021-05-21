import React,{useEffect} from 'react';
import {Text, Button, View, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

import {DrawerContent} from './screens/DrawerContent';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SupportScreen from './screens/SupportScreen';
import RootStackScreen from './screens/RootStackScreen';
import { AuthContext } from './components/context';
const Drawer = createDrawerNavigator();



const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 
  
  const authContext = React.useMemo(()=>({
    signIn: () => {
      setUserToken("Hasani");
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken("Hasani");
      setIsLoading(false);
    },
  }));
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    {userToken != null ?
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent{...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> 
       
       </Drawer.Navigator>
       :
       <RootStackScreen/>
    }
      
      
        
      
    </NavigationContainer>
      
    </AuthContext.Provider>
    
   
  );
};



export default App;
