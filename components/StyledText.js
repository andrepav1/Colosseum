import * as React from 'react';
import { Text } from 'react-native';

const MonoText = (props) => {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

const MonoTextBold = (props) => {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono-bold' }]} />;
}

export {
  MonoText,
  MonoTextBold
}