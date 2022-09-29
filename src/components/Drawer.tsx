import * as React from "react";
import Box from "@mui/material/Box";
import MuiList from "@mui/material/List";

import Divider from "@mui/material/Divider";

import DrawerNavItem from "./reusable/DrawerNavItem";
import { Drawer, DrawerHeader } from "./styled/drawer";
import { menu, shops } from "../constants/constants";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";

type props = {
    open: boolean,
    handleDrawerAction: () => void
}



function Sidebar(): JSX.Element {
    const [open, setOpen] = React.useState(true);
    const [clicked, setClicked] = React.useState("Dashboard"); 
    const theme = useTheme()
    const onClick = (text: string) => {
        setClicked(text);
    }

    const handleDrawerAction = () => {
      setOpen(!open);
    };
    

    return (
        <Box>
            <Drawer variant="permanent" open={open} >
                <DrawerHeader  open={open}>
                    <Box display="flex">
                        {open && 
                            <Box
                                component="img"
                                sx={{}}
                                alt="logo"
                                src="/logo.svg"
                            />
                        }
                        <ButtonBase 
                            onClick={handleDrawerAction}
                            sx={{ ml: "auto" }}
                        >
                            <Box
                                component="img"
                                alt="menu"
                                src="/menu.svg"
                            />
                        </ButtonBase >
                    </Box>
                </DrawerHeader>
                <MuiList sx={{ padding: 0, marginTop: "15px", }}>
                    {menu.map((text, index) => (
                        <DrawerNavItem key={index} text={text} open={open} 
                                        clicked={clicked} onClick={onClick}/>
                    ))}
                </MuiList>
                {open &&
                    <Box m="59px 24px 24px 16px">
                        <Typography variant="h4">
                                Select your shop
                        </Typography>
                        
                        
                        <Select 
                            fullWidth 
                            sx={{
                                ...theme.typography.h5, mt: '15px', 
                                color: "primary.dark",
                            }}
                            defaultValue={"1"}
                            onChange={(e: SelectChangeEvent) => alert(e.target.value)}
                        >
                            {shops.map((shop, index) =>
                                <MenuItem  
                                    key={index}
                                    value={index} 
                                    divider={index!==shops.length-1} 
                                    sx={{...theme.typography.h5, py: "16px"}} 
                                >
                                    { shop }
                                </MenuItem>
                            )}
                        </Select>
                    </Box>
                }
            </Drawer>
        </Box>
  );
}

export default Sidebar;