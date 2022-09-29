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

type props = {
    text: string,
    clicked: string,
    onClick: ( text: string ) => void
}

function CollapsedList({text, clicked, onClick}: props): JSX.Element {

    const menu =[...(text==='Catalogue' ? catalogueMenu : marketingMenu)]
 
    return (
        <MuiList sx={{py: '6px', bgcolor: '#E9F8FE'}}>
            {
                menu.map(item => (
                    <StyledListItem sx={{height: '36px'}} key={text} clicked={clicked} text={item} disableGutters>
                        <ListItemButton disableGutters 
                            sx={{height: "36px"}}
                            onClick={() => {onClick(item);
                                   
                                    }}>
                            <ListItemText primary={
                                <Typography variant="h5">
                                    {item}
                                </Typography>
                                }
                                sx={{
                                    //opacity: open ? 1 : 0,
                                    ml: '56px'
                                }}
                            />
                        </ListItemButton>
                    </StyledListItem>
                )) 
            }
        </MuiList>
  );
}

export default CollapsedList;