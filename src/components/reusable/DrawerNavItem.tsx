import { useContext, useState } from "react";

import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Collapse from '@mui/material/Collapse';
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { StyledListItem, StyledListItemText } from "../styled/listItem";
import CollapsedList from "./CollapsedList";
import {catalogueMenu, marketingMenu, menu} from "../../constants/constants"
import { ListItemContent, ListItemRectangle, ListItemRightIcon } from "../styled/box";
import { ThemeProvider } from "@mui/material/styles";
import { componentsTheme } from "../../constants/customThemeComponents";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";

type props = {
    text: string,
    open: boolean,
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

const isCollapsedItemClicked = (clicked: string, text: string) => {
    if(clicked===text) return true;
    if(text==="Catalogue" && catalogueMenu.includes(clicked)) return true;
    if(text==="Marketing" && marketingMenu.includes(clicked)) return true;
    return false;
}



function DrawerNavItem({text, open}: props) {
    
    const { clicked, onClick } = useContext(GlobalContext);
    
    const [collapsed, setCollapsed ] = useState<collapsed>({
        Catalogue: catalogueMenu.includes(clicked) && true, 
        Marketing: marketingMenu.includes(clicked) && true
    });

    
    const navigate = useNavigate();

    const handleNavItemClick = () => {
        includesString(text) ?
            setCollapsed(state => ({...state, [text]: !state[text] })) : 
            onClick(text);
        !includesString(text) && navigate(`/${text.split(' ').join('-')}`);
    }
    return ( 
    <>    
        <StyledListItem disableGutters
                        clicked={whenCollapsedItemClicked(clicked)} 
                        text={text} >
            
            <ListItemButton disableGutters 
                            sx={{height: "32px"}}
                            onClick={handleNavItemClick}>
                <ListItemRectangle  
                    sx={{
                        opacity: isCollapsedItemClicked(clicked, text) ? 1 : 0,
                    }}
                />
                <ListItemContent 
                    open={open}
                    sx={{
                        ...((isCollapsedItemClicked(clicked, text)) && {
                                backgroundColor: '#F7F7F7',
                        })    
                    }}>  
                    {<Box
                        component="img"
                        src={`/images/sidebar/${text}${isCollapsedItemClicked(clicked, text)? ' clicked' : '' }.svg`}
                    />}
                    <StyledListItemText 
                        open={open}
                        primary={
                            <Typography variant="h5">
                                {text}
                            </Typography>
                        }
                    />
                    {includesString(text) && 
                        <ListItemRightIcon>
                            { collapsed[text] ? 
                                <ExpandLessIcon/> : <ExpandMoreIcon/>
                            }
                        </ListItemRightIcon>
                    }
                </ListItemContent> 
            </ListItemButton>
            
        </StyledListItem>
        {
            text==="Log out" && <Divider />
        }
        { includesString(text) &&
            <Collapse in={open && collapsed[text]}>
                <CollapsedList text={text}/>
            </Collapse>
        }
    </>    
     );
}

export default DrawerNavItem;