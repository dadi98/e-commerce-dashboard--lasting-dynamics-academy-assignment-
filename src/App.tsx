import PageLayout from './PageLayout';
import Appbar from "./components/AppBar";
import Sidebar from "./components/Sidebar";
import { theme } from './constants/customTheme';
import { ThemeProvider } from "@mui/material/styles"
import React, { createContext } from 'react';
import { componentsTheme } from './constants/customThemeComponents';
import MainComponent from './MainComponent';
import { useInitialState } from './functions/app';

export type ContextTypes = {
  clicked: string,
  onClick: (text: string) => void
}

export const GlobalContext = createContext<ContextTypes>({
      clicked: 'Dashboard', 
      onClick: () => {}
  });

const { components } = componentsTheme;

function App() {
  
  const initialState = useInitialState()
  
  //Determines which page we are navigating in the sidebar,
  //used to apply appropriate styles
  const [clicked, setClicked] = React.useState(initialState ? initialState : 'Dashboard'); 
    
  const onClick = (text: string) => {
      setClicked(text)
  }

  return (
      <GlobalContext.Provider
        value={{
          clicked: clicked,
          onClick: onClick
        }}
      >
        <ThemeProvider theme={{...theme, components: components}}>
          <PageLayout>
            <Sidebar />
            <Appbar clicked={clicked} onClick={onClick}/>
            <MainComponent />
          </PageLayout>
        </ThemeProvider>
      </GlobalContext.Provider> 
  );
}

export default App;
