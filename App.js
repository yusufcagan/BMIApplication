import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Home
      </Text>
    </View>
  );
}

function ProgressScreen() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Progress
      </Text>
    </View>
  );
}



function PredictionScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Prediction
        </Text>
      </View>

      <View style={styles.center}>
        <View style={{ alignSelf: 'center' }}>
          <View style={styles.profile}>
            <Image source={require('./assets/profile.jpg')} style={styles.Image} resizeMode="center" />
          </View>
          <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20, }}>
            yavuz
          </Text>
        </View>
      </View>


      <View style={styles.lower}>
        <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20, }}>
          Your BMI category is :
        </Text>
        <Text style={{ color: 'green', textAlign: 'center', fontWeight: 'bold', fontSize: 18, }}>
          yusuf
        </Text>
        <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20, }}>
          Your BMR  :
        </Text>
        <Text style={{ color: 'green', textAlign: 'center', fontWeight: 'bold', fontSize: 18, }}>
          yusuf
        </Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({

  container: {
  },

  header: {
    flex: 0.9,
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "dodgerblue",
  },

  headerText: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 50,
    textAlign: 'center',
  },
  lower: {
    justifyContent: 'center',
    flex: 1.1,
    white: "100%",
    height: "45%",
    backgroundColor: "gray",
  },

  center: {
    backgroundColor: "white",
    flex: 2.4,

  },
  profile: {
    height: 200,
    width: 200,
    margin: 30,
  },
  Image: {
    flex: 1,
    height: 200,
    width: 200,
    borderRadius: 200,
  },

});


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer options={{ headerShown: false }}>
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Prediction" component={PredictionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
