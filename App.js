import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Prediction
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },

  header: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "dodgerblue",
  },

  headerText: {
    fontWeight: 'bold',
    color: '#171717',
    fontSize: 50,
    textAlign: 'center',
  }
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
