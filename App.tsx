import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
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

export default App;
