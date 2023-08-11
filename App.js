import React from 'react';
import {View, Text} from 'react-native';

import RootNavigator from './src/RootNavigator';
// import Home1 from './src/Screens/Home1';

const App = () => {
  return (
    <React.Fragment>
      <RootNavigator />

      {/* <Home1 /> */}
    </React.Fragment>
  );
};

export default App;
