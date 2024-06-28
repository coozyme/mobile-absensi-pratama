import { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar, Card, Icon, Dialog, Button, Portal } from "react-native-paper";
import { ColorStatus, StatusList } from "../../Helper/Helper";

class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         visiblePopup: false,
         disableChoiceStatus: false,
         Fullname: 'Ary Setya Pambudi',
         Date: '12 Jun 2024 - 13 Jun 2024',
         Reason: 'Pulang kampung',
         Status: 'PENDING',
      }
   }


   handleChangeStatus = (status) => {
      this.setState({
         Status: status,
         visiblePopup: !this.state.visiblePopup
      })
   }
   render() {
      return (
         <View style={style}>
            <Appbar.Header>
               <Appbar.BackAction onPress={() => {
                  this.props.navigation.goBack();
               }} />
               <Appbar.Content title="Laporan Cuti Tahunan" />
            </Appbar.Header>
            <TouchableOpacity style={{
               margin: 20,
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',
               flexWrap: 'wrap',
               alignContent: 'center',
               borderRadius: 10,
               backgroundColor: '#ffffff',
               padding: 10,
            }}

               onPress={() => {
                  this.setState({ visiblePopup: !this.state.visiblePopup })
               }}
            >
               <View
                  style={{ flexDirection: 'collumn', justifyContent: 'space-between' }}
               >
                  <Text style={{ marginBottom: 5 }}>Ary Setya Pambudi</Text>
                  <Text style={{ marginVertical: 5 }}>12 Jun 2024 - 13 Jun 2024</Text>
                  <Text style={{ marginTop: 5 }}>Pending</Text>
               </View>
               <Icon source="greater-than" size={25} color="#bdbdbd" />
            </TouchableOpacity>

            <Portal>

               <Dialog visible={this.state.visiblePopup} onDismiss={() => this.setState({ visiblePopup: !this.state.visiblePopup })}>
                  <Dialog.Content>
                     <Text variant="titleLarge"
                        style={{
                           fontWeight: '700',
                           fontSize: 20,
                           marginBottom: 10,
                        }}

                     >Persetujuan Cuti</Text>
                     <Text variant="bodyMedium">
                        Nama : {this.state.Fullname}
                     </Text>
                     <Text variant="bodyMedium">
                        Tanggal : {this.state.Date}
                     </Text>
                     <Text variant="bodyMedium">
                        Keterangan : {this.state.Reason}
                     </Text>
                     <Text variant="bodyMedium">
                        {`Status :`} <Text style={{ color: ColorStatus(this.state.Status), fontWeight: '600' }}> {this.state?.Status?.toUpperCase()}</Text>
                     </Text>
                  </Dialog.Content>
                  <Dialog.Actions>
                     {
                        StatusList.map(v => {
                           if (v.value != this.state.Status?.toUpperCase()) {
                              return (
                                 <Button
                                    textColor={ColorStatus(v.value)}
                                    disabled={v.value == this.state.Status?.toUpperCase()}
                                    onPress={() => this.handleChangeStatus(v.value)}
                                 >
                                    {v.label1}
                                 </Button>
                              )
                           }
                        })
                     }
                  </Dialog.Actions>
               </Dialog>
            </Portal>
         </View>
      );
   }
}

export default Index;

const style = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ffffff',
   },
   textContent: {
      fontSize: 20,
      fontWeight: '500',
   },

})
