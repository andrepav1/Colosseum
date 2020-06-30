import { StatusBar } from 'react-native';

const GlobalSettings = (state = { darkMode: false }, action) => {
  
  // A way to target the correct reducer
  if(action.target !== "GlobalSettings") return state;
  console.log("GlobalSettings reducer");
  // console.log(action);

  switch (action.type) {
    case "SET_DARK_MODE":
      StatusBar.setBarStyle(action.payload.darkMode?'light-content':'dark-content');
      return {...state, darkMode: action.payload.darkMode};
  }
  return state;
}

export default GlobalSettings;