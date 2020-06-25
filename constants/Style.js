
import { StyleSheet } from 'react-native';
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
        height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
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
});
