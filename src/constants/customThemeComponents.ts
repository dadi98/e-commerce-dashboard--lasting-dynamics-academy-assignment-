import { createTheme, Theme } from "@mui/material/styles"

export const componentsTheme = createTheme({
    components: {
        MuiDivider: {
            styleOverrides: {
                root:{
                    margin: '16px 0 16px', 
                    backgroundColor: '#E5E5E5',
                }
            }
        },
    }    
})