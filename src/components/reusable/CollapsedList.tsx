import * as React from "react";
import Box from "@mui/material/Box";
import MuiList from "@mui/material/List";

import Divider from "@mui/material/Divider";

import { marketingMenu, catalogueMenu } from "../../constants/constants";
import ButtonBase from "@mui/material/ButtonBase";
import { StyledListItem } from "../styled/listItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { DrawerCollapsedList } from "../styled/list";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../App";

type props = {
    text: string,
}

function CollapsedList({text}: props): JSX.Element {

    const { clicked, onClick } = useContext(GlobalContext);

    const menu =[...(text==='Catalogue' ? catalogueMenu : marketingMenu)]

    const navigate = useNavigate();
 
    return (
        <DrawerCollapsedList>
            {
                menu.map((item, index) => (
                    <StyledListItem 
                        sx={{height: '36px'}} 
                        key={index} 
                        clicked={clicked} 
                        text={item} 
                        disableGutters
                    >
                        <ListItemButton 
                            disableGutters 
                            sx={{height: "36px"}}
                            onClick={() => {
                                onClick(item);
                                navigate(`/${text}/${item.split(' ').join('-')}`)
                            }}
                        >
                            <ListItemText primary={
                                <Typography variant="h5" ml='56px'>
                                    {item}
                                </Typography>
                                } 
                            />
                        </ListItemButton>
                    </StyledListItem>
                )) 
            }
        </DrawerCollapsedList>
  );
}

export default CollapsedList;