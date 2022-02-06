import React from 'react';
import useLocalStorage from 'use-local-storage'
import themer from './components/Theme'

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark': 'light'
    setTheme(newTheme)
  }
  return (
    <div className="App" data-theme={theme}>
      <button className="themeSwitcher" onClick={switchTheme}>Switch theme</button>
      {/* <div className="themecontrols">
        <button className="whitetheme" onClick={()=>{themer("white"); window.scrollTo(0, 0);}}></button>
        <button className="whitebluetheme" onClick={()=>{themer("whiteblue"); window.scrollTo(0, 0);}}></button>
        <button className="darktheme" onClick={()=>{themer("dark"); window.scrollTo(0, 0);}}></button>
      </div> */}
    </div>
  );
};

export default App;
