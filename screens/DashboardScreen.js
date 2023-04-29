import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native';
import React, { useState, useEffect} from 'react';
import { firebase } from '../Config';

const db = firebase.firestore();

const DashboardScreen = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const try1Ref = db.collection('users');
    const unsubscribe = try1Ref.onSnapshot((querySnapshot) => {
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({...doc.data(), id: doc.id});
      });
      setData(newData);
    });
    return unsubscribe;
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={require('../components/krisss.jpg')} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.roleText}>{item.role}</Text>
          </View>
          <Text style={styles.emailText}>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Services for you</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
  },
  header: {
    height: 80,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContainer: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderColor: '#C9C9C9',
    borderWidth: 0.5,
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
  infoContainer: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#666',
  },
  roleText: {
    fontSize: 14,
    color: '#999',
    marginLeft: 8,
},
});
