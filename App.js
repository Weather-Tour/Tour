import React,{Component} from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "3d328986457d6b23d5ff91e9ddccad53";
const ADDRESS_CODE = require('./AddrCode');
var text = '';
var json = '';

var parseString = require("react-native-xml2js").parseString;



export default class extends React.Component {
  getArea = (Area) => {
 
 
    console.log(Area);
 
    this.setState({
      isLoading: true,
      tff:false,
      district:Area.title,
    });
   
  
  }
  


  state = {
    isLoading: true,
    tff: true,
  };
  getWeather = async (latitude, longitude,city,region,district) => {

        const shortForecast=  await axios.get(
            `https://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=${ADDRESS_CODE.ADDRESS_CODE[0][district]}`
        );
        this.state.tff=true;
        const data = await parseString(shortForecast.data, (err, result) => {
          text = JSON.stringify(result);
          json = JSON.parse(text);
          const weatherCode = json
              .rss
              .channel[0]
              .item[0]
              .description[0]
              .body[0]
              .data[0]
              .wfKor[0];

   
      });
          


    this.setState({
      isLoading: false,
      condition: json.rss.channel[0].item[0].description[0].body[0].data[0].wfKor[0],
      temp:   json.rss.channel[0].item[0].description[0].body[0].data[0].temp[0],
      city:city,
      region:region,
      district:district,

      firstWeather: json
      .rss
      .channel[0]
      .item[0]
      .description[0]
      .body[0]
      .data[1]
      .wfKor[0],

      firstTemp: json
      .rss
      .channel[0]
      .item[0]
      .description[0]
      .body[0]
      .data[1]
      .temp[0],

      SecondWeather: json
      .rss
      .channel[0]
      .item[0]
      .description[0]
      .body[0]
      .data[2]
      .wfKor[0],
       SecondTemp: json
      .rss
      .channel[0]
      .item[0]
      .description[0]
      .body[0]
      .data[2]
      .temp[0],


      ThirdWeather: json
      .rss
      .channel[0]
      .item[0]
      .description[0]
      .body[0]
      .data[3]
      .wfKor[0],
       ThirdTemp: json
      .rss
      .channel[0]
      .item[0]
      .description[0]
      .body[0]
      .data[3]
      .temp[0],



      FourthWeather: json
      .rss
      .channel[0]
      .item[0]
      .description[0]
      .body[0]
      .data[4]
      .wfKor[0],
  FourthTemp: json
      .rss
      .channel[0]
      .item[0]
      .description[0]
      .body[0]
      .data[4]
      .temp[0],


  FifthWeather: json
  .rss
  .channel[0]
  .item[0]
  .description[0]
  .body[0]
  .data[5]
  .wfKor[0],
  FifthTemp: json
      .rss
      .channel[0]
      .item[0]
      .description[0]
      .body[0]
      .data[5]
      .temp[0],


      SixthWeather: json
                .rss
                .channel[0]
                .item[0]
                .description[0]
                .body[0]
                .data[6]
                .wfKor[0],
      SixthTemp: json
          .rss
          .channel[0]
          .item[0]
          .description[0]
          .body[0]
          .data[6]
          .temp[0]









    });
  };
  getLocation = async () => {
    try {
      // await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      const location = await Location.reverseGeocodeAsync({
        latitude,
        longitude
    }, {useGoogleMaps: false});
  

    console.log(location[0].district)
      this.getWeather(latitude, longitude,location[0].city,location[0].region,location[0].district);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {// constructor() -> render() -> componentDidMount()
    this.getLocation();

  }
  componentDidUpdate(){  //render() -> componentDidUpdate
    if(this.state.tff!==true){
      console.log('AppJS update');
      this.getWeather(1,1,"제주시","제주도",this.state.district);



    }
    

  }
  render() {
    const { isLoading,tff, temp, condition,city,region,district,firstWeather,firstTemp,SecondWeather,SecondTemp,ThirdWeather,ThirdTemp,FourthWeather,FourthTemp,FifthWeather,FifthTemp,SixthWeather,SixthTemp } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather key={Math.random()}  func={this.getArea}
      temp={Math.round(temp)} condition={condition} city={city} region={region} district={district} 
      firstWeather={firstWeather} firstTemp={firstTemp}
      SecondWeather={SecondWeather} SecondTemp={SecondTemp}
      ThirdWeather={ThirdWeather} ThirdTemp={ThirdTemp}
      FourthWeather={FourthWeather} FourthTemp={FourthTemp}
      FifthWeather={FifthWeather} FifthTemp={FifthTemp}
      SixthWeather={SixthWeather} SixthTemp={SixthTemp} />
    );
  }
}
