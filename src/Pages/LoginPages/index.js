import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, IconButton, MD2Colors, TextInput } from "react-native-paper";
import { lightBlue100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: "",
         password: "",
         isShownPassword: true
      }
   }
   render() {
      const { username, password, isShownPassword } = this.state
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
               onPress={() => console.log('Pressed')}
               style={{
                  marginTop: 35,
               }}
            >
               Login
            </Button>
         </View>
      );
   }
}

export default Index;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignContent: "center",
      justifyContent: "center",
      padding: 40
   }
})