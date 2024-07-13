/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import { store, persistor } from './src/Storage/Store';
import Routes from './src/Routes';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider >
          < Routes />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
