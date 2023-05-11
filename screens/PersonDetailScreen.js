import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { firebase } from '../Config';

const db = firebase.firestore();

const PersonDetailScreen = ({ route }) => {
  const [person, setPerson] = useState(null);
  const { personId } = route.params;

  useEffect(() => {
    const fetchPersonData = async () => {
      const personRef = db.collection('users').doc(personId);
      const personData = await personRef.get();

      if (personData.exists) {
        setPerson(personData.data());
      } else {
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
    <View style={styles.container}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
      {person ? (
        <View style={styles.card}>
          <View style={styles.imageContainer}>
             <Image source={require('../components/krisss.jpg')} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.nameText}>{person.name}</Text>
            <Text style={styles.detailText}>Email: {person.email}</Text>
            <Text style={styles.detailText}>Job: {person.role}</Text>
            <Text style={styles.detailText}>Ratings: {person.Ratings}</Text>
          </View>
          
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
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
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 9999,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '90%',
    height: 'auto',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  detailText: {
    fontSize: 18,
    marginBottom: 5,
    color: '#666666',
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
  },
});

export default PersonDetailScreen;
