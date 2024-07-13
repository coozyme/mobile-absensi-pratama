import React, { Component } from "react";
import { StyleSheet, Text, View, Modal, Dimensions, Image } from "react-native";
import { Appbar, Button, Portal, Dialog } from "react-native-paper";
import { GetCurrentLocation, RequestLocationPermission } from "../../Helper/Geolocation";
import Geolocation from 'react-native-geolocation-service';
import { Camera, getCameraDevice } from "react-native-vision-camera";
import { check, request, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import RNFetchBlob from "rn-fetch-blob";


// import { useCameraDevice, useCameraPermission   } from "react-native-vision-camera";

class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isActiveGPS: false,
         longitude: 0,
         latitude: 0,
         isVisibleModalCameraPermission: false,
         hideDialog: true,
         isPopupCamera: false,
         cameraPosition: false,
         photo: false,
         base64Photo: false
      }
      this.cameraRef = React.createRef();
   }


   componentDidMount() {
      // RequestAuthorizationGeolocatin()
      this.getCurrentLocation()
      this.handleCamera()

   }

   handleButtonClockin = async () => {
      if (this.state.latitude == 0 || this.state.longitude == 0) {
         this.getCurrentLocation()
      }
      if (!this.state.cameraPosition) {
         this.setState({ isVisibleModalCameraPermission: true })
      }
   }
   handleButtonClockout = async () => {
      if (this.state.latitude == 0 || this.state.longitude == 0) {
         this.getCurrentLocation()
      }
      if (!this.state.cameraPosition) {
         this.setState({ isVisibleModalCameraPermission: true })
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

   handleCamera = async () => {
      await Camera.requestCameraPermission()
      const cameraPermission = Camera.getCameraPermissionStatus()
      console.log('LOG-cameraPermission', cameraPermission)

      if (cameraPermission == "granted") {
         const devices = Camera.getAvailableCameraDevices()
         const device = getCameraDevice(devices, 'front')
         this.setState({
            cameraPosition: device,
            isPopupCamera: true,
            isVisibleModalCameraPermission: false
         })

         return
      }

   }

   handleTakePhoto = async () => {
      if (this.cameraRef.current) {
         const photo = await this.cameraRef.current.takePhoto({
            flash: 'off', // or 'off', 'auto'
            skipMetadata: true,
         });
         console.log('LOG-PHOTO', photo?.path)

         const base64Photo = this.convertImageToBase64(photo?.path)
         base64Photo.then((s) => {
            this.setState({
               base64Photo: s,
            })
         }).catch((c) => {
            console.log('LOG-C', c)
         })

         this.setState({
            isPopupCamera: false
         })

      }
   }

   openAppSettings = () => {
      openSettings()?.catch(() => console.warn('Cannot open settings'));
   };

   convertImageToBase64 = async (imagePath) => {
      const base64 = await RNFetchBlob.fs.readFile(imagePath, 'base64');
      return base64;
   }

   render() {
      const { base64Photo } = this.state
      var date = new Date();
      const monthName = date.toLocaleString('default', { month: 'long' });
      const dayName = date.toLocaleString('default', { weekday: 'short' });

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const clock = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
      const { isPopupCamera, hideDialog } = this.state
      const dimensionsWidth = Dimensions.get('screen').width
      const dimensionsHeight = Dimensions.get('screen').height
      // const { hasPermission } = useCameraPermission()
      console.log('LOG-base64Photo', base64Photo)

      return (
         <View style={{ flex: 1 }}>
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
                  height: dimensionsHeight / 4,
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
                  <Button style={styles.buttonClock}
                     mode="contained"
                     onPress={() => this.handleButtonClockin()}
                  >
                     Clock In
                  </Button>
                  <Button
                     style={styles.buttonClock}
                     mode="contained"
                     onPress={() => this.handleButtonClockout()}
                  >Clock Out</Button>
               </View>
            </View>

            <Portal >
               <Dialog visible={isPopupCamera} style={{ flex: 1, height: 50, width: dimensionsWidth / 2 * 1.75 }}>
                  <Dialog.Title style={{ textAlign: "center" }}>Capture Face</Dialog.Title>
                  <Dialog.Content>
                     <Text variant="bodyMedium" style={{ textAlign: "center" }}>Pastikan Posisi di Tengah</Text>
                  </Dialog.Content>
                  <Camera
                     style={{
                        height: "75%",
                        width: "100%",

                     }}
                     device={this.state.cameraPosition}
                     isActive={true}
                     ref={this.cameraRef}
                     photo={true}
                  />
                  <Dialog.Actions >
                     <Button onPress={() => this.handleTakePhoto()}>Submit</Button>
                  </Dialog.Actions>
               </Dialog>
            </Portal>

            {base64Photo && (
               <View >
                  <Text>OOK</Text>
                  <Image source={{ uri: `data:image/jpg;base64,${base64Photo}` }} style={{
                     width: 300,
                     height: 400,
                     backgroundColor: 'red'
                  }} />
               </View>
            )}

            <Modal
               transparent={true}
               animationType="slide"
               visible={this.state.isVisibleModalCameraPermission}
               onRequestClose={() => this.setState({ isVisibleModalCameraPermission: !this.state.isVisibleModalCameraPermission })}
            >
               <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                     <Text style={styles.modalText}>We need access to your camera to proceed.</Text>
                     <Button mode="text" title="Open Settings" onPress={() => this.openAppSettings()}>Open Settings</Button>
                     <Button mode="text" title="Grant Permissions" onPress={() => this.handleCamera()}>Grant Permissions</Button>
                  </View>
               </View>
            </Modal>

         </View>
      );
   }
}

export default Index;



const styles = StyleSheet.create({
   buttonClock: {
      width: '40%',
   },
   modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
   },
   modalText: {
      marginBottom: 20,
      textAlign: 'center',
   },
})