import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Appbar, Button, RadioButton, List, TextInput } from "react-native-paper";

class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isExpanded: false,
         TypeOfCuti: 'Cuti Tahunan'
      }
   }

   handlePress = () => {
      this.setState({ isExpanded: !this.state.isExpanded })
   };

   render() {
      return (
         <>
            <Appbar.Header>
               <Appbar.BackAction onPress={() => {
                  this.props.navigation.goBack();
               }} />
               <Appbar.Content title="Pengajuan Cuti" />
            </Appbar.Header>
            <View style={style.container}>
               <View
                  style={{
                     margin: 20,
                     flexDirection: 'column',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                     alignContent: 'center',
                     borderRadius: 10,
                     backgroundColor: '#f1f3f7',
                     paddingTop: 10,
                     paddingBottom: 10,
                  }}
               >
                  <Text
                     style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: 10,
                     }}
                  >
                     Cuti Tahunan
                  </Text>
                  <Text
                     style={{
                        fontSize: 20,
                        color: '#000',
                        fontWeight: '400',
                        marginBottom: 10,
                     }}
                  >
                     8 Hari
                  </Text>
               </View>
               <View
                  style={{
                     margin: 20,
                     flexDirection: 'column',
                     // alignItems: 'center',
                     // flexWrap: 'wrap',
                     // alignContent: 'center',
                     // borderRadius: 10,
                     // backgroundColor: '#f1f3f7',
                     // paddingTop: 10,
                     // paddingBottom: 10,
                  }}
               >
                  <List.Section>
                     <List.Accordion
                        title="Type Cuti"
                        left={props => <List.Icon {...props} icon="rename-box" />}
                        expanded={this.state.isExpanded}
                        onPress={() => this.handlePress()}>
                        <List.Item title="Tahunan" onPress={() => alert('Tahunan')} />
                        <List.Item title="Hamil" onPress={() => alert('Hamil')} />
                     </List.Accordion>
                  </List.Section>

                  <TextInput
                     label="Keterangan"
                  // value={"text"}
                  // onChangeText={text => setText(text)}
                  />
               </View>

               <Button
                  style={{
                     height: 50,
                     justifyContent: 'center',
                     margin: 20,
                     borderRadius: 10,
                  }}
                  mode='contained'
                  onPress={() => alert('Ajukan Cuti')}
               >
                  Ajukan Cuti
               </Button>
            </View >
         </>
      );
   }
}

export default Index;

const style = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#ffff',
      justifyContent: 'space-between'
   }
});