import { Theme } from "@mui/material"
import { theme } from "../constants/customTheme"

export const orders = {
    display: 'flex',
    flexDirection: "column",
    gap: "12px", 
    width: "100%"
}

export const extensionsList = {
    my: 0,
    width: "100%", 
    "&::-webkit-scrollbar": {display: 'none'}                                            
}

export const backdropStyles = (theme: Theme) => ({ 
    color: '#fff', 
    zIndex: theme.zIndex.drawer + 1,
})

export const errorStyles = {
    paddingTop: "22px",
    display: 'flex',
    justifyContent: 'center'
}

export const contactButton = {
    bgcolor: "primary.light", 
    color: "white", 
    padding: '15px 52px',
    boxShadow: '0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)',
    borderRadius: '5px'
}

export const internalLink = (theme: Theme) => ({
    transition: theme.transitions.create(["all"], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.sharp
    }),
    "&:hover": {
        marginRight: "9px"
    }
})

export const InternalLinkText = {
    lineHeight:"20px",
    display:"flex",
    textDecorationLine: 'underline'
}

export const extensionLink = {
    display: "flex", 
    flexDirection: "column",
    gap: "12px"
}

export const extensionWrapper = {
    width: '152px',  
    overflowY:"hidden"
}

export const numberAvatar = (theme: Theme) => ({
    width: '24px', 
    height: '24px', 
    fontSize: '13px', 
    marginRight: '17px',
    backgroundColor: theme.palette.success.main
})