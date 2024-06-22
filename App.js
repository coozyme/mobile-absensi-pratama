/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import {
  useColorScheme,
} from 'react-native';

// import factory from './src/Storage/Store';
import { store, persistor } from './src/Storage/Store';
import Routes from './src/Routes';
import { PersistGate } from 'redux-persist/integration/react';

// const { store, persistor } = factory();
// const Stack = createNativeStackNavigator();
// function App() {
//   // const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='HomePages'>
//         <Stack.Screen
//           name='HomePage'
//           component={HomePages}
//         />
//         <Stack.Screen
//           name='AbsensiPage'
//           component={AbsensiPages}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    <PaperProvider >
      < Routes />
    </PaperProvider>
    //   </PersistGate>
    // </Provider>
  );
}
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
