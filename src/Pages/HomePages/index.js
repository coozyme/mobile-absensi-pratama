import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

class Index extends Component {
   constructor(props) {
      super(props);
   }
   state = {}
   render() {
      return (
         <View style={style.container}>
            <Text style={style.textName}>Hi, Ary Setya P</Text>
            <Text style={style.textDepartement}>Departement Produksi</Text>
            <Text style={style.textAbsen}>Absen 08.00 - 17.00</Text>

            <View style={style.buttonMenuContainer}>
               <View style={
                  {
                     flexDirection: 'row',
                     alignContent: 'stretch',
                     flexWrap: 'wrap',
                     width: '100%',
                  }}>
                  <Button
                     icon="account"
                     mode="contained"
                     style={style.button}
                     onPress={() => console.log('Pressed')}
                  >
                     Profile
                  </Button>
                  <Button
                     icon="map-marker"
                     mode="contained"
                     style={style.button}
                     onPress={() => console.log('Pressed')}
                  >
                     Absensi
                  </Button>
                  <Button
                     icon="clock"
                     mode="contained"
                     style={style.button}
                     onPress={() =>
                        this.props.navigation.navigate('CutiPage')
                     }
                  >
                     Cuti
                  </Button>
               </View>
               {/* <View style={{
                  flexDirection: 'row',
                  alignContent: 'stretch',
                  flexWrap: 'wrap',
                  width: '100%',
               }}>
                  <Button
                     icon="camera"
                     mode="contained"
                     style={style.buttonRiwayatAbsen}
                     onPress={() => console.log('Pressed')}
                  >
                     Riwayat Absen
                  </Button>
                  <Button
                     icon="camera"
                     mode="contained"
                     style={style.buttonDaftarCuti}
                     onPress={() => console.log('Pressed')}
                  >
                     Daftar Cuti
                  </Button>
               </View> */}
            </View>
            <Text style={style.textAbsen}>Laporan</Text>
            {/* Menu Managemen */}
            <View style={style.buttonMenuContainer}>
               <View style={
                  {
                     flexDirection: 'row',
                     alignContent: 'stretch',
                     flexWrap: 'wrap',
                     width: '100%',
                  }}>
                  <Button
                     icon="receipt"
                     mode="contained"
                     style={style.buttonRiwayatAbsen}
                     onPress={() => console.log('Pressed')}
                  >
                     Laporan Absen
                  </Button>
                  <Button
                     icon="receipt"
                     mode="contained"
                     style={style.buttonDaftarCuti}
                     onPress={() =>
                        this.props.navigation.navigate('LaporanCutiPage')}
                  >
                     Laporan Cuti
                  </Button>
               </View>
            </View>
         </View>
      );
   }
}

export default Index;

const style = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      // justifyContent: 'center',
      // alignItems: 'center',
   },
   textName: {
      fontSize: 20,
      fontWeight: 'bold',
   },
   textDepartement: {
      fontSize: 20,
      fontWeight: 'bold',
   },
   textAbsen: {
      fontSize: 20,
      fontWeight: 'bold',
   },
   buttonMenuContainer: {
      flexDirection: 'row',
      alignContent: 'stretch',
      flexWrap: 'wrap',
      // justifyContent: 'space-between',
      margin: 10,
      width: '100%',
      // backgroundColor: 'red',

   },
   button: {
      margin: 10,
      width: 100,
      height: 50,
      justifyContent: 'center',
      borderRadius: 10,
   },
   buttonRiwayatAbsen: {
      margin: 10,
      width: 150,
      height: 50,
      justifyContent: 'center',
      borderRadius: 10,
   },
   buttonDaftarCuti: {
      margin: 10,
      width: 150,
      height: 50,
      justifyContent: 'center',
      borderRadius: 10,
   },
})