import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const signUpScreen = ({navigation}) =>{

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        
    });
    const textInputChange = (val) => {
        if(val.length != 0){
            setData(
                {
                    ...data,
                    email: val,
                    check_textInputChange: true
                }
            );
        } else {
            setData({
                    ...data,
                    email: val,
                    check_textInputChange: false
                });

        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });

    }
    const handleConfirmPasswordChange = (val) => {
      setData({
          ...data,
          confirm_password: val
      });

  }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });

    }

    const updateConfirmSecureTextEntry  = () => {
      setData({
          ...data,
          confirm_secureTextEntry: !data.confirm_secureTextEntry
      });

  }

    return (
        <View style={styles.container}>
         <View style={styles.header}>
           <Text style={styles.text_header}>
            Register Now!
           </Text>
         </View>
         <Animatable.View 
         animation="fadeInUpBig"
         style={styles.footer}>
           <Text style={styles.text_footer}>Email</Text>
           <View style={styles.action}>
           <FontAwesome
              name="user-o"
              color="#05375a"
              size={20}
            />
            <TextInput
            style={styles.textInput}
            placeholder="Your Email"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ?
            <Animatable.View
                animation="bounceIn"
            >
                <Feather
                name="check-circle"
                color="green"
                size={20}
                />
            </Animatable.View>
            
            : null}
           </View>

           <Text style={[styles.text_footer, {
               marginTop:35
           }]}>Password</Text>
           <View style={styles.action}>
           <FontAwesome
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
            style={styles.textInput}
            placeholder="Your password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
             onPress={()=>updateSecureTextEntry()}>
            {data.secureTextEntry ?
                <Feather
                name="eye-off"
                color="green"
                size={20}
                /> 
                :
                <Feather
                name="eye"
                color="green"
                size={20}
                />}
            </TouchableOpacity>
            
           </View>
           <Text style={[styles.text_footer, {
               marginTop:35
           }]}>Confirm Password</Text>
           <View style={styles.action}>
           <FontAwesome
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
            style={styles.textInput}
            placeholder="Confirm Your password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity
             onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ?
                <Feather
                name="eye-off"
                color="green"
                size={20}
                /> 
                :
                <Feather
                name="eye"
                color="green"
                size={20}
                />}
            </TouchableOpacity>
            
           </View>
           <View style={styles.button}>
               <LinearGradient
                   colors={['#FF6347', '#FF6360']}
                   style={styles.signIn}
                >
                   <Text style={[styles.textSign, {
                       color:"#fff"
                   }]}>Sign Up</Text>
               </LinearGradient>
               <TouchableOpacity
               onPress={() => navigation.navigate('SignInScreen')}
               style={[styles.signIn, {
                        borderColor: '#FF6347',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
               >
                   <Text style={[styles.textSign, {
                        color: '#FF6347'
                    }]}>Sign In</Text>
               </TouchableOpacity>
           </View>
            
          </Animatable.View>
        </View>
      );
  };

  export default signUpScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FF6347'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
