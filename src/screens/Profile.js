import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../styles/homeStyle';

const Profile = ({navigation, route}) => {
  const {userData} = route.params;
  return (
    <View>
      <Text>Selamat Datang, {userData.userName}</Text>
      <Text>Lokasi = {userData.location}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={styles.textButton}>Go To Profile... Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
