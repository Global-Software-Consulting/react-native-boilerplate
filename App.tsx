import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 25}}>BoilerPlate</Text>
        <IconMaterialIcons name="favorite-border" color="red" size={30} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
