import { createTheme } from "@mui/material/styles"
import shadows, {Shadows} from "@mui/material/styles/shadows"

const customShadows: Shadows = shadows;

export const theme = createTheme({
    palette: {
      primary: {
        main: '#103b66',
        dark: '#233B53',
        light: '#21B8F9',
      },
      secondary: {
        main: '#6C7C8C',
      },
      warning: {
        main: '#FFA26B',
        light: '#F3A35C'
      },
      error: {
        main: '#F33451'
      },
      success: {
        main: '#00C48C'
      }
    },
    shadows: (() => {
        customShadows.splice(1, 1,'0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)'); 
        return [...customShadows];
    })(),
    typography: {
      h6: {
        fontFamily: 'Noto Sans HK',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '11px',
        lineHeight: '13px',
      },
      h5: {
        fontFamily: 'Noto Sans HK',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: 'normal'
      },
      h4: {
        fontFamily: 'Noto Sans HK',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '20px',
        letterSpacing: 'normal'
      },
      h3: {
        fontFamily: 'Noto Sans HK',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        lineHeight: '22px',
        letterSpacing: 'normal'
      },
      
      h2: {
        fontFamily: 'Noto Sans HK',
        fontStyle: 'normal',
        fontWeight: 'Medium',
        fontSize: '22px',
        lineHeight: '27px',
        letterSpacing: 'normal'
      },
      h1: {
        fontFamily: 'Source Sans Pro',
        fontStyle: 'normal',
        fontWeight: 'Medium',
        fontSize: '34px',
        lineHeight: '39px',
        letterSpacing: 'normal'
      },
      caption: {
        fontFamily: 'Source Sans Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '17px',
        lineHeight: '22px',
        letterSpacing: 'normal'
      },
      body1: {
        fontFamily: 'Noto Sans HK',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '42px',
        lineHeight: '61px',  
        letterSpacing: 'normal'    
      },
      body2: {
        fontFamily: 'Noto Sans HK',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '17px',
        lineHeight: '22px',
        letterSpacing: 'normal'
      },
      subtitle1: {
        fontFamily: 'Noto Sans HK',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '12px',
        lineHeight: '12px', 
        letterSpacing: 'normal'
      }
    },
  })