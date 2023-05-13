import React from 'react';
import { View, Text, StyleSheet, Linking, Image, ScrollView, ImageBackground, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AppInfoScreen = () => {
    const navigation = useNavigation()
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#000548' }}>
    <ImageBackground source={require('../components/bgtrees.jpg')} resizeMode='stretch'>
      <Text style={styles.appName}>SERVICE PROVIDER</Text>
      <ScrollView>
      <Text style={styles.appDescription}>
        The Service Provider App is an all-in-one platform that connects service providers with customers in need of their services. Whether you're looking for a plumber to fix a leaky faucet, a cook to cater your next event, or a driver to take you to   your destination, our app has got you covered.
      </Text>
      <View style={styles.servicesContainer}>
        <Text style={styles.service}>Plumber</Text>
        <Text style={styles.service}>Cook</Text>
        <Text style={styles.service}>Driver</Text>
        
      </View>
      
</ScrollView>
<TouchableOpacity onPress={() => {
              navigation.navigate("Dashboard")
              
            }}>
      <View style={{flexDirection: 'row', marginTop: 130, marginLeft:30}}>
      <Image source={require('../components/greenArrowRightswipe.png')} style={{width:30, height:40}}/>
      <Image source={require('../components/greenArrowRightswipe.png')} style={{width:30, height:40, }}/>
      <Image source={require('../components/greenArrowRightswipe.png')} style={{width:30, height:40}}/>
            
            
        </View>
        </TouchableOpacity>
        
        
      <View style={styles.ownerContainer}>
        <Text style={styles.ownerInfo}>Owned by Team VIIT</Text>
        <View style={styles.socialLinksContainer}>
          <Text style={styles.socialLink} onPress={() => handleLinkPress('https://www.facebook.com/johndoe')}>Facebook</Text>
          <Text style={styles.socialLink} onPress={() => handleLinkPress('https://www.instagram.com/johndoe')}>Instagram</Text>
          <Text style={styles.socialLink} onPress={() => handleLinkPress('https://www.twitter.com/johndoe')}>Twitter</Text>
        </View>
      </View>
 </ImageBackground>
 </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  appName: {
    fontSize: 24,
    color:'white',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 70
  },
  appDescription: {
    fontSize: 18,
    color:'white',
    
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
    margin:45,
    
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop:40
  },
  service: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  ownerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  ownerInfo: {
    fontSize: 16,
    marginBottom: 10,
    color:'white'
  },
  socialLinksContainer: {
    flexDirection: 'row',
  },
  socialLink: {
    marginLeft: 10,
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default AppInfoScreen;
