import React, {useEffect, useState} from 'react';
import { useColorScheme} from 'react-native';
// External imports above, internal imports below
import ReRightApp from './src/ReRightApp';
import './config/global';


const App = () => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(colorScheme === "dark");
    useEffect(() => {
      setIsDark(colorScheme==="dark");
      global.isDarkModeEnabled = isDark? true : false;
        }, [colorScheme]);
  return (
    <ReRightApp />
  );
}
export default App;