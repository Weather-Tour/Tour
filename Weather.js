import React from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground, ScrollView, Settings  } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-web";
import SettingRecommand from "./SettingRecommand";

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Name={
  "흐림":'cloud',
  "구름 많음":'cloud',
  "소나기" : 'rainy',
  "맑음" : 'sunny',
}
const array =  //BackGround
  {
  
  sunny: require("./img/sunny.jpeg"),


  '소나기' : require("./img/흐림.jpeg"),

  '흐림' : require("./img/흐림.jpeg"),

  '구름 많음': require("./img/night.jpeg"),

  '맑음' : require("./img/sunny.jpeg")
  
  }

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze?",
    subtitle: "it is something like fog.",
    statusBar: "light-content",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#2c3e50", "#3498db"],
    title: "Thunderstorm!",
    subtitle: "never go to outside.",
    statusBar: "light-content",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#F1F2B5", "#135058"],
    title: "Drizzle",
    subtitle: "a tiny rain.",
    statusBar: "dark-content",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00d2ff", "#3a7bd5"],
    title: "it's rain",
    subtitle: "don't forget your umbrella.",
    statusBar: "light-content",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#acb6e5", "#86fde8"],
    title: "happy snow!",
    subtitle: "let's make a snowman.",
    statusBar: "light-content",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff8008", "#ffc837"],
    title: "it's clear!",
    subtitle: "just go outside, and to be happy.",
    statusBar: "light-content",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "so gloomy.",
    subtitle: "i don't like clouds.",
    statusBar: "light-content",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#d3959b", "#bfe6ba"],
    title: "Mist",
    subtitle: "for your skin.",
    statusBar: "light-content",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
    title: "dust in the wind",
    subtitle: "stay at home.",
    statusBar: "light-content",
  },
};

function CurrentTime(){
  var today = new Date();   

  var hours = ('0' + today.getHours()).slice(-2); 

  
  return timeString = hours;

}

function GetTime(a){
  if(a>24){
    return a-24;

  }
  else
    return a;


}


export default function Weather({  func,temp, condition ,city,region,district,firstWeather,firstTemp,SecondWeather,SecondTemp,ThirdWeather,
  ThirdTemp,FourthWeather,FourthTemp,FifthWeather,FifthTemp,SixthWeather,SixthTemp}) {
    var Time=Number(CurrentTime());
    console.log(condition);
    console.log(district);
return (

        <View style={styles.container2}>

        <ImageBackground style={styles.weatherImage}
        resizeMode="cover"
          source={array[condition]} >
        </ImageBackground>

        <View style={styles.Maintemp}>
          
          <Text style={styles.cityName}>{district}</Text>
          <Text style={styles.tempFont}>{temp}º</Text>
          <Text style={styles.weatherState}>{condition}</Text>
        </View>


        <View style={styles.dayWeather}>
          <ScrollView style={styles.weatherBox}
            horizontal={true}>

            <View style={styles.weatherComponent}>
              <Text style={styles.textStyle}>{GetTime(Time+3)}시</Text>
              <View style={styles.weatherIcon}>
                <Ionicons name={Name[firstWeather]} size={40} color='white' />
              </View>
              <Text style={styles.textStyle}>{Math.round(firstTemp)}º</Text>
            </View>

            <View style={styles.weatherComponent}>
              <Text style={styles.textStyle}>{GetTime(Time+6)}시</Text>
              <View style={styles.weatherIcon}>
                <Ionicons name={Name[SecondWeather]} size={40} color='white' />
              </View>
              <Text style={styles.textStyle}>{Math.round(SecondTemp)}º</Text>
            </View>

            <View style={styles.weatherComponent}>
              <Text style={styles.textStyle}>{GetTime(Time+9)}시</Text>
              <View style={styles.weatherIcon}>
                <Ionicons name={Name[ThirdWeather]} size={40} color='white' />
              </View>
              <Text style={styles.textStyle}>{Math.round(ThirdTemp)}º</Text>
            </View>

            <View style={styles.weatherComponent}>
              <Text style={styles.textStyle}>{GetTime(Time+12)}시</Text>
              <View style={styles.weatherIcon}>
                <Ionicons name={Name[FourthWeather]} size={40} color='white' />
              </View>
              <Text style={styles.textStyle}>{Math.round(FourthTemp)}º</Text>
            </View>

            <View style={styles.weatherComponent}>
              <Text style={styles.textStyle}>{GetTime(Time+15)}시</Text>
              <View style={styles.weatherIcon}>
                <Ionicons name={Name[FifthWeather]} size={40} color='white' />
              </View>
              <Text style={styles.textStyle}>{Math.round(FifthTemp)}º</Text>
            </View>

            <View style={styles.weatherComponent}>
              <Text style={styles.textStyle}>{GetTime(Time+18)}시</Text>
              <View style={styles.weatherIcon}>
                <Ionicons name={Name[SixthWeather]} size={40} color='white' />
              </View>
              <Text style={styles.textStyle}>{Math.round(SixthTemp)}º</Text>
            </View>

          </ScrollView>

        </View>
        
       <SettingRecommand key2={Math.random()} Area={{'city':city, 'region':region,'district':district}} func={func}/> 
                   
        
        </View>



    // <LinearGradient
    //   // style={styles.container}
    //   // colors={[
    //   //   weatherOptions[condition].gradient[0],
    //   //   weatherOptions[condition].gradient[1],
    //   // ]}
    // >
    //   {/* <StatusBar barStyle={weatherOptions[condition].statusBar} />
    //   <View style={styles.halfContainer}>
    //     <MaterialCommunityIcons
    //       name={weatherOptions[condition].iconName}
    //       size={100}
    //       color="white"
    //     />
    //     <Text style={styles.temp}>{temp}°</Text>
    //   </View>
    //   <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
    //     <Text style={styles.title}>{weatherOptions[condition].title}</Text>
    //     <Text style={styles.subtitle}>
    //       {weatherOptions[condition].subtitle}
    //     </Text> */}
       
    //   {/* </View> */}
      
    // </LinearGradient>
  );
}

// Weather.propTypes = {
//   temp: PropTypes.number.isRequired,
//   condition: PropTypes.oneOf([
//     "Thunderstorm",
//     "Drizzle",
//     "Rain",
//     "Snow",
//     "Clear",
//     "Clouds",
//     "Haze",
//     "Mist",
//     "Dust",
//   ]).isRequired,
// };
// ==>>>>  타입 검사

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center'
  },

  weatherImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute'
  },

  Maintemp: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },

  tempFont: {
    fontSize: 60,
    color: "white",
    fontWeight: 'bold',
    paddingLeft: 5
  },

  cityName: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },

  weatherState: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },

  dayWeather: {
    flex: 0.8,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  weatherBox: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 0.3,
    borderRadius: 20,
    width: '100%',
    height: '70%',
    marginLeft: 15,
    marginRight: 15,
  },

  weatherComponent: {
    flex: 1,
    width: '30%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    paddingLeft: 20,
    paddingRight: 20
  },

  textStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },

  weatherIcon: {
    paddingTop: 10,
    paddingBottom: 10
  },
  line: {
    backgroundColor: '#F5F5F5',
    height: 5,
    width: '100%'
  }



});
