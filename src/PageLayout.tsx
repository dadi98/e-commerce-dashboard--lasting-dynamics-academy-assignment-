import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import { maxWidth } from "@mui/system";
import React from "react";

type props = {
    children: Array<JSX.Element>
}

function PageLayout({children}: props): JSX.Element {
    const [Drawer, Appbar, Header, Main] = children;
    return ( 
       <Box display="flex" bgcolor="#F8F9FB">
            <Box>
                {Drawer}
            </Box>
            <Box>
                <Stack>
                    <Box>
                        {Appbar}
                    </Box>
                    <Box  
                        sx={{
                           background: 'linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)',
                        }}
                        color="white"
                        display="flex"
                        p="40px 38px 103px 37px" 
                    >
                        
                            {Header}
                        
                    </Box>
                    <Box mt="-53px" mx="41px" mb="40px">
                        <Grid container columnSpacing={'24px'}>
                            {Main}
                        </Grid>
                    </Box>
                </Stack>
            </Box>
       </Box>
    );
}

export default PageLayout;