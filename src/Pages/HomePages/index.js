import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { SetDataUser, SetIsLogged, SetToken } from "../../Redux/Action";
class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         // dataUser: {} || this.props.dataUser,
      }
   }
   render() {
      const { fullname, devisi, schedule } = this.props.dataUser
      console.log('dataUser', this.props.dataUser.fullname)
      return (
         <View style={style.container}>
            <Text style={style.textName}>Hi, {fullname}</Text>
            <Text style={style.textDepartement}>Departement {devisi?.title}</Text>
            <Text style={style.textAbsen}>Absen {schedule?.clockIn} - {schedule?.clockOut}</Text>

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
                     onPress={() =>
                        this.props.navigation.navigate('AbsensiPage')
                     }
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

const mapStateToProps = (state) => {
   return {
      tokenAuth: state.Reducer.TokenAuth,
      dataUser: state.Reducer.DataUser,
      isLogged: state.Reducer.IsLogged,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      setToken: (v) => dispatch(SetToken(v)),
      setDataUser: (v) => dispatch(SetDataUser(v)),
      setIsLogged: (v) => dispatch(SetIsLogged(v)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);


const style = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   },
   textName: {
      fontSize: 20,
      color: 'black',
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