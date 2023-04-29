import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../Config'

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('kk@gmail.com')
  const [password, setPassword] = useState('123456')
  const [checkIt, setCheck] = useState(true)
  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      alert(error.message)
    }
  }
//   const registerUser = async (username, email, password, name, role) => {
//     await firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
//       firebase.auth().currentUser.sendEmailVerification({
//         handleCodeInApp: true,
//         url: 'https://maid-for-you-3398a.firebaseapp.com',
//       }).then(() => {
//         alert('Verification email send mostly check spam folder')
//       }).catch((error) => {
//         alert(error.message)
//       }).then(() => {
//         firebase.firestore().collection('users')
//           .doc(firebase.auth().currentUser.uid)
//           .set({
//             name,
//             email,
//             role,

//           })
//       }).catch((error) => {
//         alert(error.message)
//       })
//     })

//     // handle signup logic hereA
//   };
  return (
   
    <View style={{ flex: 1, backgroundColor: '#000548' }}>
      <ImageBackground source={require('../components/bgtrees.jpg')} resizeMode='stretch'>
        <Image style={styles.img2}
          source={require('../components/applogo.png')}></Image>
        <View style={{ backgroundColor: '#FFFFFF', margin: 20, borderRadius: 10, marginTop: 80 }}>
          <View style={{ margin: 20 }}>
            <Text style={styles.sty1}>Sign In To Continue</Text>
            <Text style={styles.sty2} >Email Address</Text>
            <View style={{ marginTop: 10, backgroundColor: '#F6F6F6', borderColor: 'grey', borderRadius: 5, borderWidth: 0.2 }}>
              <TextInput
                style={{ fontSize: 16, padding: 10 }}
                placeholder="Enter Email Address"
                onChangeText={(email) => setEmail(email)}
                autoCapitalize="none"
                autoCorrect={false}></TextInput>
            </View>
            <Text style={styles.sty2} >Password</Text>
            <View style={{ marginTop: 10, backgroundColor: '#F6F6F6', borderColor: 'grey', borderRadius: 5, borderWidth: 0.2 }}>
              <TextInput
                style={{ fontSize: 16, padding: 10 }}
                placeholder="Enter Password"
                onChangeText={(password) => setPassword(password)}
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}></TextInput>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  setCheck(!checkIt)
                }}>
                {checkIt == true ? <Image style={styles.chkbox1}
                  source={require('../components/checkbox.png')}
                ></Image> :
                  <Image style={styles.chkbox2}
                  ></Image>
                }
              </TouchableOpacity>
              <Text style={{ margin: 5 }}>Remember Me</Text>
            </View>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Dashboard")
              loginUser(email, password)
            }}>
              <View style={{ backgroundColor: '#00A991', borderRadius: 5, marginTop: 20 }}>
                <Text style={{ color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>Log in</Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Text style={{ color: 'lightgrey' }}>____________</Text>
              <Text style={{ color: 'darkgrey', margin: 5, marginLeft: 20, marginRight: 20 }}>Or sign in with</Text>
              <Text style={{ color: 'lightgrey' }}>____________</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', margin: 15, marginLeft: 30, marginRight: 30 }}>
              <View style={{ borderColor: 'grey', borderWidth: 0.2, borderRadius: 5, margin: 10 }}>
                <TouchableOpacity>
                  <Image style={styles.imga}
                    source={require('/Users/apple/MaidForYou-kartiki/assets/Pay.png')}></Image>
                </TouchableOpacity>
              </View>
              <View style={{ borderColor: 'grey', borderWidth: 0.2, borderRadius: 5, margin: 10 }}>
                <TouchableOpacity>
                  <Image style={styles.imgg}
                    source={require('/Users/apple/MaidForYou-kartiki/assets/GOOG0ed88f7c1.png')}></Image>
                </TouchableOpacity>
              </View>
              <View style={{ borderColor: 'grey', borderWidth: 0.2, borderRadius: 5, margin: 10 }}>
                <TouchableOpacity>
                  <Image style={styles.imgm}
                    source={require('/Users/apple/MaidForYou-kartiki/assets/images(11).png')}></Image>
                </TouchableOpacity>
              </View>
            </View> */}
            <View style={{ flexDirection: 'row', marginLeft: 60 }}>

              <Text style={{ color: 'black', margin: 2.5 }}>Don’t have an account!</Text>

              <TouchableOpacity onPress={() => {
                navigation.navigate("Signup")

              }}>
                <Text style={{ color: 'royalblue', margin: 2.5 }}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  img1: {
    flex: 1
  },
  img2: {

    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  chkbox1: {
    height: 25,
    width: 25
  },
  chkbox2: {
    height: 25,
    width: 25,
    backgroundColor: "gray"
  },
  imga: {
    height: 25,
    width: 20,
    margin: 10,
    marginLeft: 24,
    marginRight: 24
  },
  imgg: {
    height: 25,
    width: 25,
    margin: 10,
    marginLeft: 20,
    marginRight: 20
  },
  imgm: {
    height: 25,
    width: 25,
    margin: 10,
    marginLeft: 20,
    marginRight: 20
  },
  sty1: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center'
  },
  sty2: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20
  },
});

export default Login
