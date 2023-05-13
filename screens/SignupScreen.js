import { useNavigation } from '@react-navigation/native';
import 'firebase/auth'
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ImageBackground, ScrollView  } from 'react-native';
import React, { useState } from 'react';
import { firebase } from '../Config'

export default function Signup() {
  const navigation = useNavigation()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [checkIt, setCheck] = useState(true)
  const registerUser = async (username, email, password, name, role) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://maid-for-you-3398a.firebaseapp.com',
      }).then(() => {
        alert('Verification email send mostly check spam folder')
      }).catch((error) => {
        alert(error.message)
      }).then(() => {
        firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
            role,

          })
      }).catch((error) => {
        alert(error.message)
      })
    })
  };

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Signup</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Username"
    //     value={username}
    //     onChangeText={setUsername}
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="fullName"
    //     value={name}
    //     onChangeText={setName}
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Email"
    //     value={email}
    //     onChangeText={setEmail}
    //     keyboardType="email-address"
    //     autoCapitalize="none"
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Password"
    //     value={password}
    //     onChangeText={setPassword}
    //     secureTextEntry
    //     autoCapitalize="none"
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Role"
    //     value={role}
    //     onChangeText={setRole}

    //     autoCapitalize="none"
    //   />
    //   <TouchableOpacity style={styles.button} 
    //     onPress={() => registerUser(username, email, password, name, role)
    //     }
    //   >
    //     <Text style={styles.buttonText}>Sign up</Text>

    //   </TouchableOpacity>
    //   <TouchableOpacity style={styles.button} 
    //     onPress={() =>     navigation.navigate("Login") 
    //     }
    //   >
    //   <Text style={styles.buttonText}>Already have an Account!</Text>
    //   </TouchableOpacity>
    // </View>


    <ScrollView  style={{ flex: 1, backgroundColor: '#000548'}}>
      <ImageBackground source={require('../components/bgtrees.jpg')} resizeMode='stretch'>
        <Image style={styles.img2}
          source={require('../components/applogo.png')}></Image>
        <View style={{ backgroundColor: '#FFFFFF', margin: 20, borderRadius: 10, marginTop: 50 }}>
          <View style={{ margin: 20 }}>
            <Text style={styles.sty1}>Sign Up</Text>
            {/* <KeyboardAwareScrollView style={{}}>*/}
            {/* <ScrollView>  */}
            <Text style={styles.sty2} >Full Name</Text>
            <View style={{ marginTop: 10, backgroundColor: '#F6F6F6', borderColor: 'grey', borderRadius: 5, borderWidth: 0.2 }}>
              <TextInput
                style={{ fontSize: 16, padding: 10 }}
                placeholder="Enter Full Name"
                onChangeText={(name) => setName(name)}
                autoCapitalize="none"
                value={name}
                autoCorrect={false}></TextInput>
            </View>
            <Text style={styles.sty2} >User ID</Text>
            <View style={{ marginTop: 10, backgroundColor: '#F6F6F6', borderColor: 'grey', borderRadius: 5, borderWidth: 0.2 }}>
              <TextInput
                style={{ fontSize: 16, padding: 10 }}
                placeholder="Creat User ID"
                onChangeText={(username) => setUsername(username)}
                autoCapitalize="none"
                value={username}
                autoCorrect={false}></TextInput>
            </View>
            <Text style={styles.sty2} >Email Address</Text>
            <View style={{ marginTop: 10, backgroundColor: '#F6F6F6', borderColor: 'grey', borderRadius: 5, borderWidth: 0.2 }}>
              <TextInput
                style={{ fontSize: 16, padding: 10 }}
                placeholder="Enter Email Address"
                onChangeText={(email) => setEmail(email)}
                autoCapitalize="none"
                value={email}
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
                value={password}
                autoCorrect={false}></TextInput>
            </View>
            <Text style={styles.sty2} >Confirm Password</Text>
            <View style={{ marginTop: 10, backgroundColor: '#F6F6F6', borderColor: 'grey', borderRadius: 5, borderWidth: 0.2 }}>
              <TextInput
                style={{ fontSize: 16, padding: 10 }}
                placeholder="Enter Confirmation Password"
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                autoCapitalize="none"
                secureTextEntry={true}
                value={confirmPassword}
                autoCorrect={false}></TextInput>
            </View>

            <Text style={styles.sty2}>Designation</Text>
            <View style={{ marginTop: 10, backgroundColor: '#F6F6F6', borderColor: 'grey', borderRadius: 5, borderWidth: 0.2 }}>
              <TextInput
                style={{ fontSize: 16, padding: 10 }}
                placeholder="Enter Designation"
                onChangeText={(role) => setRole(role)}
                autoCapitalize="none"
                value={role}
                autoCorrect={false}></TextInput>
            </View>
            {/* </ScrollView> */}
            {/* </KeyboardAwareScrollView>                 */}
            <TouchableOpacity onPress={() => {
              navigation.navigate("Dashboard")
              registerUser(username, email, password, name, role)
            }}>
              <View style={{ backgroundColor: '#00A991', borderRadius: 5, marginTop: 20 }}>
                <Text style={{ color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>Sign Up</Text>
              </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginLeft: 60, marginTop: 10, marginBottom: 20 }}>

              <Text style={{ color: 'black', margin: 2.5 }}>Already have an account!</Text>

              <TouchableOpacity onPress={() => {
                navigation.navigate("Login")

              }}>
                <Text style={{ color: 'royalblue', margin: 2.5 }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView >



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: '80%',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 12,
    marginTop: 24,
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
    marginTop: 35,
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});