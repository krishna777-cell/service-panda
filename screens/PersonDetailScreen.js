import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { firebase } from '../Config';

const db = firebase.firestore();

const PersonDetailScreen = ({ route }) => {
  const [person, setPerson] = useState(null);
  const { personId } = route.params;

  useEffect(() => {
    const fetchPersonData = async () => {
      const personRef = db.collection('users').doc(personId);
      const personData = await personRef.get();
      console.log("personData", personData)
      if (personData.exists) {
        setPerson(personData.data());
      } else {
        alert('No person data found')
        console.log('No person data found');
      }
    };

    fetchPersonData();
  }, [personId]);

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => console.log('Error during logout: ', error));
  }

  return (
    // <View style={styles.container}>
    <ScrollView style={{ flex: 1, backgroundColor: '#000548' }}>
      <ImageBackground source={require('../components/bgtrees.jpg')} resizeMode='stretch'>
        <Image style={styles.img2}
          source={require('../components/applogo.png')}></Image>
        {person ? (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              {/* <Image style={{ height: 20, width: 17, marginBottom: 20 }}
                source={require('/Users/apple/Downloads/banda/screens/components/GreenBack.png')}></Image> */}
            </TouchableOpacity>
            <Image source={require('../components/PRofile.png')} style={styles.image} />
            <Text style={styles.nameText}>{person.name}</Text>
            <Text style={styles.detailText}>Email: {person.email}</Text>
            <Text style={styles.detailText}>Job: {person.role}</Text>
            <Text style={styles.detailText}>Ratings: {person.Ratings}</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </ImageBackground>
    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    backgroundColor: '#00A991',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  img2: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 90,
    marginBottom: 40
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '90%',
    height: 'auto',
    padding: 50,
    margin: 10,
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    alignSelf: 'center',
  },
  detailText: {
    flex: 1,
    width: "100%",
    fontSize: 18,
    marginBottom: 5,
    color: '#666666',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 10
  },
  detailsContainer: {
    flex: 1,
    padding: 80,
    margin: 10
  },
});

export default PersonDetailScreen;