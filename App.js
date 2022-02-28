import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Image,
  TouchableHighlight,
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Home
        </Text>
      </View>

      <View style={styles.center}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <View style={styles.profileHome}>
            <Image source={require('./assets/profile.jpg')} style={styles.ImageHome} />
          </View>
          <TouchableHighlight style={styles.buttonProfile}>
            <Text style={{ TextAlign: 'center', fontSize: 20, fontWeight: 'bold', }}>BMR</Text>
          </TouchableHighlight>
        </View>
      </View>


      <View style={styles.lower}>
        <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20, margin: "5%", }}>
          Calculate
        </Text>

        <View style={{ alignSelf: 'center', flexDirection: 'row', flex: 1, }}>
          <TouchableHighlight style={styles.button}>
            <Text style={{ TextAlign: 'center', fontSize: 20, fontWeight: 'bold', }}>BMI</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.button}>
            <Text style={{ TextAlign: 'center', fontSize: 20, fontWeight: 'bold', }}>BMR</Text>
          </TouchableHighlight>
        </View>

      </View>
    </View >
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
  fixToText: {
    flexDirection: 'row',
    justifyContent: "center",
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
  button: {
    borderColor: 'blue',
    borderRadius: 20,
    height: "50%",
    width: "40%",
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
    margin: "5%",
  },
  profileHome: {
    height: "79%",
    width: "79%",
  },
  ImageHome: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
  buttonProfile: {
    borderColor: 'blue',
    borderRadius: 20,
    height: "25%",
    width: "50%",
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
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
