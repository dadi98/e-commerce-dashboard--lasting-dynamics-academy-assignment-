import PageLayout from './PageLayout';
import Appbar from "./components/AppBar";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';
import { theme } from './constants/customTheme';
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline";
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Drawer/>
        <Appbar/>
        <Header/>
        <Main/>
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
