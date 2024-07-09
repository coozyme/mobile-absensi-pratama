import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { GetCurrentLocation, RequestLocationPermission } from "../../Helper/Geolocation";
import Geolocation from 'react-native-geolocation-service';

class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isActiveGPS: false,
         longitude: 0,
         latitude: 0
      }
   }

   componentDidMount() {
      // RequestAuthorizationGeolocatin()
      this.getCurrentLocation()
   }

   handleButtonClockin = async () => {
      if (this.state.latitude == 0 || this.state.longitude == 0) {
         this.getCurrentLocation()
      }
   }

   getCurrentLocation = async () => {
      const result = await RequestLocationPermission();
      if (result) {
         Geolocation.getCurrentPosition(
            position => {
               this.setState({
                  longitude: position.coords.longitude,
                  latitude: position.coords.latitude
               })
            },
            error => {
               return {
                  error: error?.code,
                  message: error?.message,
               }
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
         );
      }
   }

   render() {
      var date = new Date();
      const monthName = date.toLocaleString('default', { month: 'long' });
      const dayName = date.toLocaleString('default', { weekday: 'short' });

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const clock = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
      console.log('LOG-LONGLAT', this.state.latitude, this.state.longitude)
      return (
         <View>
            <Appbar.Header>
               <Appbar.BackAction onPress={() => {
                  this.props.navigation.goBack();
               }} />
               <Appbar.Content title="Absensi" />
            </Appbar.Header>
            <View
               style={{
                  backgroundColor: "#CB4335",
                  alignItems: 'center',
                  height: '45%',
                  margin: 20,
                  borderRadius: 20,
                  justifyContent: 'space-evenly'
               }}
            >
               <View
                  style={{
                     alignItems: 'center',
                  }}
               >
                  <Text
                     style={{
                        fontWeight: '600',
                        fontSize: 25,
                        color: '#F7F9F9'
                     }}
                  >{clock}</Text>
                  <Text
                     style={{
                        marginTop: 5,
                        fontWeight: '600',
                        fontSize: 15,
                        color: '#F7F9F9'
                     }}
                  >
                     {dayName},{date.getDate() + monthName + date.getFullYear()}
                  </Text>
               </View>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-evenly',
                     width: '100%'
                  }}
               >
                  <Button style={style.buttonClock}
                     mode="contained"
                     onPress={() => this.handleButtonClockin()}
                  >
                     Clock In
                  </Button>
                  <Button style={style.buttonClock}
                     mode="contained"
                  >Clock Out</Button>
               </View>
            </View>

         </View>
      );
   }
}

export default Index;

const style = StyleSheet.create({
   buttonClock: {
      width: '40%',
   }
})