import { View, Text, FlatList, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from '../Config';
const db = firebase.firestore();
const DashboardScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const try1Ref = db.collection('users');
    const unsubscribe = try1Ref.onSnapshot((querySnapshot) => {
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({ ...doc.data(), id: doc.id });
      });
      setData(newData);
    });
    return unsubscribe;
  }, []);
  const renderItem = ({ item }) => {
    const onPress = () => {
      navigation.navigate('PersonDetail', { personId: item.id });
    };
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.imageContainer}>
          {/* <Image source={require('../components/krisss.jpg')} style={styles.image} /> */}
          <Image source={require('../components/PRofile.png')} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.roleText}>{item.role}</Text>
          </View>
          <Text style={styles.emailText}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Services for you</Text>
      </View> */}
      <View style={{ borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {navigation.goBack()}}>
            <Image style={{ height: 20, width: 17, margin: 20 }}
              source={require('../components/greenarrow.png')}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.sty3}>Dashboard</Text>
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
    backgroundColor: '#F5F5F5',
    paddingTop: 30,
  },
  header: {
    height: 80,
    backgroundColor: '#34495E',
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
  sty1: {
    color: '#10B185',
    fontSize: 18,
    margin: 30,
    marginTop: 50,
    textAlign: 'left',
    fontWeight: '600'
  },
  sty2: {
    color: '#10B185',
    fontSize: 18,
    margin: 30,
    marginTop: 50,
    textAlign: 'right',
    marginLeft: 220,
    fontWeight: '600'
  },
  sty3: {
    marginLeft: 20,
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 10
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