import * as React from "react";
import Box from "@mui/material/Box";

import DrawerNavItem from "./reusable/DrawerNavItem";
import { Drawer, DrawerHeader } from "./styled/drawer";
import { menu, shops } from "../constants/constants";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useTheme, createTheme } from "@mui/material/styles";
import { DrawerList } from "./styled/list";
import { SelectItem } from "./styled/box";
import { ShopSelect } from "./styled/select";
import { SelectMenuItem } from "./styled/menuItem";

function Sidebar(): JSX.Element {
                                        
    const [open, setOpen] = React.useState(true);
    
    const handleDrawerAction = () => {
      setOpen(!open);
    };

    return (
        <Box>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader  open={open}>
                    <Box display="flex">
                        {open && 
                            <Box 
                                component="img"
                                alt="logo"
                                src="/logo.svg"
                            />
                        }
                        <ButtonBase data-testid="sidebar-button"
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
                <DrawerList>
                    {menu.map((text, index) => (
                        <DrawerNavItem key={index} text={text} open={open} />
                    ))}
                </DrawerList>
                {open &&
                    <SelectItem data-testid="sidebar-select">
                        <Typography variant="h4">
                            Select your shop
                        </Typography>
                        <ShopSelect 
                            fullWidth
                            defaultValue={"0"}
                            onChange={(e: SelectChangeEvent<unknown>) => alert(e.target.value)}
                        >
                            {shops.map((shop, index) =>
                                <SelectMenuItem  
                                    key={index}
                                    value={index} 
                                    divider={index!==shops.length-1} 
                                >
                                    { shop }
                                </SelectMenuItem>
                            )}
                        </ShopSelect>
                    </SelectItem>
                }
            </Drawer>
        </Box>
  );
}

export default Sidebar;