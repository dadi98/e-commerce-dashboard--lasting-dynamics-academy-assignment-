import PageLayout from './PageLayout';
import Appbar from "./components/AppBar";
import Drawer from "./components/Drawer";
import './App.css';
import { theme } from './constants/customTheme';
import { ThemeProvider } from "@mui/material/styles"
import React, { createContext } from 'react';
import { componentsTheme } from './constants/customThemeComponents';
import MainComponent from './MainComponent';
import { useLocation } from 'react-router-dom';

type ContextTypes = {
  clicked: string,
  onClick: (text: string) => void
}

export const GlobalContext = createContext<ContextTypes>({
      clicked: 'Dashboard', 
      onClick: () => {}
  });

const { components } = componentsTheme;

function App() {
  
  const initialState = useLocation().pathname.split('/').filter(a => a!=='').pop()?.split('-').join(' ');                                      
  const [clicked, setClicked] = React.useState(initialState ? initialState : 'Dashboard'); 
    
  const onClick = (text: string) => {
      setClicked(text);
  }

  return (
    
      <ThemeProvider theme={{...theme, components: components}}>
        <GlobalContext.Provider
          value={{
            clicked: clicked,
            onClick: onClick
          }}
        >
          <PageLayout>
            <Drawer />
            <Appbar clicked={clicked}/>
            <MainComponent />
          </PageLayout>
        </GlobalContext.Provider>
      </ThemeProvider>
    
  );
}

export default App;
