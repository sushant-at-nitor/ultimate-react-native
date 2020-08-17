import React from 'react';
import types from 'prop-types';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import t from 'src/locale';

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    backgroundColor: '#0dffff',
    color: '#fff',
    padding: 20,
    fontSize: 18,
  },
});

export const MyApp = ({ isReady }) => (
  <View>
    <If condition={isReady}>
      <Text style={styles.message}>{t('Message')}</Text>
      <Else />
      <ActivityIndicator color="#000" />
    </If>
  </View>
);

MyApp.propTypes = {
  isReady: types.bool.isRequired,
};

export default MyApp;
