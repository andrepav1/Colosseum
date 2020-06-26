import * as React from 'react';
import { Text } from 'react-native';

const MonoText = (props) => {
  return <Text {...props} style={[props.style, { fontFamily: 'montserrat-regular' }]} />;
}

const MonoTextBold = (props) => {
  return <Text {...props} style={[props.style, { fontFamily: 'montserrat-semi-bold' }]} />;
}

export {
  MonoText,
  MonoTextBold
}