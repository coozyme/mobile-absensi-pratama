import axios from "axios";
import { Component } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput, Portal, Dialog } from "react-native-paper";

import { HOST } from "../../Config/config";
import { SetDataUser, SetIsLogged, SetToken } from "../../Redux/Action";

class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: "",
         password: "",
         isShownPassword: true,
         isSuccessLogin: false,
         isLoading: false,
         popUpInfo: false,
         messagePopup: ''
      }
   }

   componentDidMount() {
      if (this.props.isLogged) {
         this.props.navigation.navigate('HomePage')
      }
   }

   handleLogin = async () => {
      this.setState({ isLoading: true })
      try {
         console.log(HOST)
         const data = {
            username: this.state.username,
            password: this.state.password
         }
         const respAuth = await axios.post(`${HOST}/auth/login`, data, {
            headers: {
               'Accept': 'application/json',
               'content-type': 'application/json',
            }
         })

         this.props.setToken(respAuth.data.data.token)
         this.props.setIsLogged(true)

         const respData = await axios.get(`${HOST}/user`, {
            headers: {
               'Authorization': `Bearer ${this.props.tokenAuth}`,
               'Accept': 'application/json',
               'content-type': 'application/json',
            }
         })

         this.props.setDataUser(respData.data.data)
         this.setState({ isLoading: false })
         this.props.navigation.navigate('HomePage')

      } catch (error) {
         console.log('error', error.response.data)
         this.setState({ popUpInfo: true, messagePopup: error.response.data.message })
         this.setState({ isLoading: false })
      }

      console.log('TOKEN', this.props.tokenAuth)
      console.log('ISLOGGED', this.props.isLogged)
      console.log('DataUser', this.props.dataUser)

   }
   render() {
      const { username, password, isShownPassword, popUpInfo, messagePopup, isLoading } = this.state
      return (
         <View style={styles.container}>
            <Text
               style={{
                  fontWeight: "700",
                  fontSize: 36,
                  color: "#6101BC"
               }}
            >
               Let's Get Started!
            </Text>
            <Text
               style={{
                  fontWeight: "400",
                  fontSize: 20,
                  color: "#E6E1EA",
                  marginBottom: 30
               }}
            >Sign in for work absence</Text>
            <TextInput
               mode="outlined"
               label="Username"
               onChangeText={(user) => this.setState({ username: user })}
               value={username}
            // style={{
            //    marginVertical: 20
            // }}
            />
            <TextInput
               mode="outlined"
               textContentType="password"
               label="Password"
               onChangeText={(pass) => this.setState({ password: pass })}
               value={password}
               secureTextEntry={isShownPassword}
               right={isShownPassword ? <TextInput.Icon icon="eye"
                  onPress={() => this.setState({ isShownPassword: !this.state.isShownPassword })}
               /> : <TextInput.Icon icon="eye-remove"
                  onPress={() => this.setState({ isShownPassword: !this.state.isShownPassword })}
               />}
               style={{
                  marginVertical: 20
               }}
            />

            <Button
               mode="contained"
               loading={isLoading}
               disabled={isLoading}
               onPress={() => this.handleLogin()}
               style={{
                  marginTop: 35,
               }}
            >
               Login
            </Button>

            <Portal>
               <Dialog visible={popUpInfo} onDismiss={() => this.setState({ popUpInfo: !popUpInfo })}>
                  <Dialog.Icon icon="progress-alert" color="red" />
                  <Dialog.Content>
                     <Text variant="bodyMedium" style={{
                        marginTop: 10,
                        fontSize: 20,
                        textAlign: "center"
                     }}>{messagePopup}</Text>
                  </Dialog.Content>
               </Dialog>
            </Portal>
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

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignContent: "center",
      justifyContent: "center",
      padding: 40
   }
})