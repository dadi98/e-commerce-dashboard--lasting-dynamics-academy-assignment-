import { useState } from "react";

import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Collapse from '@mui/material/Collapse';
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { StyledListItem } from "../styled/listItem";
import CollapsedList from "./CollapsedList";
import {catalogueMenu, marketingMenu, menu} from "../../constants/constants"

type props = {
    text: string,
    open: boolean,
    clicked: string,
    onClick: ( text: string ) => void
}
type collapsed = {
    [key: string]: boolean, 
    Catalogue: boolean,
    Marketing: boolean,
    
}

const includesString = (text: string) => {
    if(['Catalogue', 'Marketing'].includes(text)) return true;
    return false;
}

const whenCollapsedItemClicked = (clicked: string) => {
    if(catalogueMenu.includes(clicked)) return "Catalogue";
    if(marketingMenu.includes(clicked)) return "Marketing";
    return clicked;
}

const whenCollapsedItemClickedRectangle = (clicked: string, text: string) => {
    if(menu.includes(clicked)) return false;
    if(text==="Catalogue" && catalogueMenu.includes(clicked)) return true;
    if(text==="Marketing" && marketingMenu.includes(clicked)) return true;
    return false;
}

function DrawerNavItem({text, open, clicked, onClick}: props) {

    const [collapsed, setCollapsed ] = useState<collapsed>({Catalogue: false, Marketing: false});

    return ( 
    <>    
        <StyledListItem key={text}
                        clicked={whenCollapsedItemClicked(clicked)} 
                        text={text} disableGutters>
            <ListItemButton disableGutters 
                            sx={{height: "32px"}}
                            onClick={() => {
                                !includesString(text) && onClick(text);
                                includesString(text) &&
                                         setCollapsed(state => ({...state, [text]: !state[text] }))
                                }}>
                <Box sx={{
                        width: '3px',
                        height: '32px',
                        backgroundColor: 'primary.light',
                        borderRadius: '20px',
                        opacity: clicked===text || whenCollapsedItemClickedRectangle(clicked, text) ? 1 : 0,
                    }}>|</Box>
                <Box  sx={{ 
                        display: "flex", 
                        width: '248px', 
                        py: '4px',
                        ml: open ? '4px' : '0',
                        pl: open ? '13px' : '23px',
                        
                        ...((clicked===text || whenCollapsedItemClickedRectangle(clicked, text)) && {
                                backgroundColor: '#F7F7F7',
                        })    
                        }}>  
                    {<Box
                        component="img"
                        src={`/images/sidebar/${text}${clicked===text || whenCollapsedItemClickedRectangle(clicked, text)? ' clicked' : '' }.svg`}
                    />}
                    <ListItemText primary={
                        <Typography variant="h5">
                            {text}
                        </Typography>
                        }
                        sx={{ 
                            
                            opacity: open ? 1 : 0,
                            pl: '16px'
                        }}
                    />
                    {includesString(text) && 
                        <Box sx={{color: 'primary.main', mr: '20px'}}>
                            { collapsed[text] ? 
                                <ExpandLessIcon/> : <ExpandMoreIcon/>
                            }
                        </Box>
                    }
                </Box> 
            </ListItemButton>
        </StyledListItem>
        {text==="Log out" &&
            <Divider sx={{my: '16px', bgcolor: '#E5E5E5'}}/>
        }
        { includesString(text) &&
            <Collapse in={open && collapsed[text]}>
                <CollapsedList text={text} clicked={clicked} onClick={onClick}/>
            </Collapse>
        }
    </>    
     );
}

export default DrawerNavItem;