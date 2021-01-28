
import { StyleSheet } from 'react-native';
import Colors from './Colors'

export default StyleSheet.create({
  darkContainer: {
    flex: 1,
    backgroundColor: '#020202E8',
  },
  softDarkContainer: {
    flex: 1,
    backgroundColor: '#020202CF',
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
    backgroundColor: "#101010",
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
  },
  lightDividerStyle: {
    backgroundColor: "#FFFFFF55", 
    width: "94%", 
    alignSelf: "center",
    height: 0.5,
  },
  darkDividerStyle: {
    backgroundColor: "#00000066", 
    width: "92%", 
    alignSelf: "center",
    height: 0.5,
  }
});
