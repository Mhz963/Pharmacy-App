/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {enableLatestRenderer} from 'react-native-maps';
import React from 'react';
import RootNavigator from './src/routes/RootNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import {StripeProvider} from '@stripe/stripe-react-native';

enableLatestRenderer();
const App = () => {
  const publishableKey = 'pk_test_qblFNYngBkEdjEZ16jxxoWSM';

  return (
    <StripeProvider publishableKey={publishableKey}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </StripeProvider>
  );
};

export default App;
