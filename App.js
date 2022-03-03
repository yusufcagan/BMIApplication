import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import 'react-native-gesture-handler'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Graph from './assets/graph.png';
import Home from './assets/home_icon.png';
import Profile from './assets/profile.png'


function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Home
        </Text>
      </View>

      <View style={styles.center}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <View style={styles.profileHome}>
            <Image source={require('./assets/profile.jpg')} style={styles.ImageHome} blurRadius={3} />
          </View>
          <TouchableOpacity style={styles.buttonProfile}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: "black" }}>
              Upload Image
            </Text>
            <Image source={require('./assets/upload.png')} style={{ height: 25, width: 26, marginLeft: 20 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lower}>
        <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20, margin: "5%", }}>
          Calculate
        </Text>

        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'black' }}>BMI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'black' }}>BMR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView >
  );
}

function ProgressScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Progress
        </Text>
      </View>
      <View style={{ flex: 3.2 }}>
        <Text style={{ color: 'black', fontSize: 25 }}>BMR</Text>
        <LineChart
          data={{
            //labels: ["", "", "", "", "", ""],
            datasets: [
              {
                data: [
                  20,
                  35,
                  50,
                  60,
                  10,
                  40
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: () => `red`,
            labelColor: () => `blue`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "3",
              strokeWidth: "5",
              stroke: "blue"
            }

          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <Text style={{ color: 'black', fontSize: 25 }}>BMI</Text>
        <LineChart
          data={{
            //labels: ["time"],
            datasets: [
              {
                data: [
                  50,
                  80,
                  70,
                  60,
                  10,
                  30
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `red`,
            labelColor: (opacity = 1) => `blue`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "3",
              strokeWidth: "5",
              stroke: "blue"
            }

          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    </SafeAreaView>

  );
}



function PredictionScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Prediction
        </Text>
      </View>

      <View style={styles.center}>
        <View style={{ alignSelf: 'center' }}>
          <View style={styles.profile}>
            <Image
              source={require('./assets/profile.jpg')}
              style={styles.image}
              resizeMode="center" />
          </View>
          <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20, }}>
            Emma Johnson
          </Text>
        </View>
      </View>


      <View style={styles.lower}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 20 }}>
          <Image source={require('./assets/12.png')} style={{ height: 30, width: 30, marginRight: 20 }} />
          <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
            Your BMI category is :
          </Text>
        </View>
        <Text style={{ color: 'green', textAlign: 'center', fontSize: 18, }}>
          Healty
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 20 }}>
          <Image source={require('./assets/12.png')} style={{ height: 30, width: 30, marginRight: 20 }} />
          <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
            Your BMR  :
          </Text>
        </View>
        <Text style={{ color: 'green', textAlign: 'center', fontSize: 18, }}>
          1.605 Calories/Day
        </Text>

      </View>
    </SafeAreaView >
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
    flex: 0.7,
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
    flex: 0.8,
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
  image: {
    height: 200,
    width: 200,
    borderRadius: 200,
  },
  button: {
    borderColor: 'blue',
    borderRadius: 20,
    height: "50%",
    width: "40%",
    backgroundColor: "dodgerblue",
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
    borderRadius: 20,

  },
  buttonProfile: {
    bottom: '20%',
    position: 'absolute',
    borderColor: 'dodgerblue',
    borderRadius: 20,
    height: "20%",
    width: "65%",
    backgroundColor: "dodgerblue",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});


const Tab = createBottomTabNavigator();
const TabMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'dodgerblue',
        },
        tabBarShowLabel: false
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={Home}
              resizeMode={'cover'}
              style={{
                height: '50%',
                width: '19%',
                tintColor: focused ? 'white' : 'black'
              }}

            />
          ),
        }}
      />
      <Tab.Screen name="Progress" component={ProgressScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={Graph}
            resizeMode={'cover'}
            style={{
              height: '50%',
              width: '19%',
              tintColor: focused ? 'white' : 'black'
            }}

          />
        ),
      }} />
      <Tab.Screen name="Prediction" component={PredictionScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={Profile}
              resizeMode={'cover'}
              style={{
                height: '50%',
                width: '19%',
                tintColor: focused ? 'white' : 'black'
              }}

            />
          ),
        }} />
    </Tab.Navigator>
  );
}

// const Drawer = createDrawerNavigator();
// const SideMenu = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Prediction" component={PredictionScreen} />
//     </Drawer.Navigator>
//   );
//}
const App = () => {
  return (
    <NavigationContainer options={{ headerShown: false }}>
      <TabMenu />
    </NavigationContainer>
  );
};

export default App;
