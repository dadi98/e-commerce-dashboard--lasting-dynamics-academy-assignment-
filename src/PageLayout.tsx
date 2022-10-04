import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';

import { createTheme, ThemeProvider } from "@mui/material/styles"
import React from "react";
import { HeaderBox, MainBox } from "./components/styled/box";

type props = {
    children: Array<JSX.Element>
}


function PageLayout({children}: props): JSX.Element {
    const [Drawer, Appbar, MainComponent] = children;
    return ( 
       <Box display="flex" bgcolor="#F8F9FB">
            <Box>
                {Drawer}
            </Box>
            <Box flexGrow={1}>
                <Box>
                    {Appbar}
                </Box>
                {MainComponent}
            </Box>
       </Box>
    );
}

export default PageLayout;