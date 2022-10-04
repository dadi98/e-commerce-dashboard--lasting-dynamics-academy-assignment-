import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

type props = {
    title: string,
    link: string,
    children?: React.ReactNode
}

const StyledLink = styled(Link)(({ theme }) => ({
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.sharp
    }),
    "&:hover": {
      marginRight: "9px"
    }
  }));

const StyledPaper = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "22px 23px 23px",
    gap: "29.59px",
    borderRadius: "10px",
    background: theme.palette.warning.light,
    color: "white",
          
}));


function MobileAppCard(): JSX.Element {
    
    const theme = useTheme()

    return (
        <StyledPaper elevation={1} >
            <Box display="flex" gap="23px">    
                <Box display="flex" flexDirection="column" gap="13px" mt="10px">
                    <Typography variant="h2" fontWeight={500}>
                        Sell your products on your exclusive APP published on the stores 
                    </Typography>
                    <Box sx={{ display:'flex',color: 'white', 
                                gap:'12px',
                            }} >
                        <StyledLink href="#" underline="none"
                            color='inherit'
                            sx={{}}>
                            <Typography variant="caption" sx={{textDecorationLine: 'underline'}} >
                                Show more
                            </Typography>
                        </StyledLink>
                        <Box
                            component="img"
                            src={`/images/dashboard/arrow-right-white.svg`}
                        />
                    </Box>
                </Box>
                <Box
                    component="img"
                    src="/images/dashboard/phone.svg"
                    mr="3.21px"
                />
            </Box>
            <Box width="100%">
                <Box display="flex" paddingRight="11px" >
                    <Box 
                        mr="auto"
                        component="img"
                        src="/images/dashboard/App Store.svg"/>
                    <Box
                        component="img"
                        src="/images/dashboard/Google Play.svg"
                    />
                </Box>
            </Box>
        </StyledPaper>
    );
}

export default MobileAppCard;