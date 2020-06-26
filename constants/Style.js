
import { StyleSheet } from 'react-native';
import Colors from './Colors'

export default StyleSheet.create({
  darkContainer: {
    flex: 1,
    backgroundColor: '#000000EE',
  },
  lightContainer: {
    flex: 1,
    backgroundColor: '#00000002',
  },
  lightCardContainer: {
    backgroundColor: "#FFF", 
    borderRadius: 8, 
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  darkCardContainer: {
    backgroundColor: "#252525",
    borderRadius: 8, 
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  smallDarkText: {
    fontSize: 12,
    color: Colors.darkTextColour,
  },
  mediumDarkText: {
    fontSize: 16,
    color: Colors.darkTextColour,
  },
  largeDarkText: {
    fontSize: 22,
    color: Colors.darkTextColour,
  },
  smallLightText: {
    fontSize: 12,
    color: Colors.lightTextColour,
  },
  mediumLightText: {
    fontSize: 16,
    color: Colors.lightTextColour,
  },
  largeLightText: {
    fontSize: 22,
    color: Colors.lightTextColour,
  }
});
