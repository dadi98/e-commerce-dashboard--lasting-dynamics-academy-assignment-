import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { StyledPaper } from "../styled/paper";
import Link from "@mui/material/Link";
import ExternalLink from "./ExternalLink";
import { styled, useTheme } from "@mui/material/styles";
import TimeInterval from "./TimeInterval";

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
  

function DashboardCard({title, link, children}: props): JSX.Element {
    
    const theme = useTheme()

    return (
        <StyledPaper elevation={1} title={title}>
            {title!=="logo" ?
                <Box sx={{ flexGrow: 1, width: '100%',}}>
                    <Box display="flex" mx={ title==="Latest news" ? '10px' : 0}>
                        <Box display="flex" flexGrow={1} gap="16px" alignItems="center">
                            <Box
                                component="img"
                                src={`/images/dashboard/${title}.svg`}
                                height='24px'
                                width={'24px'}
                            />
                            <Typography variant="h2" color="primary.main">
                                {title}
                            </Typography>
                        </Box>
                        {title === "Latest news" &&
                            <ExternalLink text="Visit our blog" link="#" variant="caption" color="primary.light" lineHeight="20px" />
                        }
                        {["Visitors", "Orders"].includes(title) &&
                            <TimeInterval />
                        }
                    </Box> 
                </Box> : 
                <Box
                    component="img"
                    src="/images/dashboard/trustpilot.svg"
                />
            }
            { 
                children
            }
            { !["Latest news", "Customer support"].includes(title) &&
                <Box sx={{ display:'flex',
                        alignItems: title==="Orders" ? 'flex-end' : 'center',
                        height: title==="Orders"? '41px': 'auto',
                        color: 'primary.light', 
                        gap:'12px'
                        }} >
                    <StyledLink href="#" underline="none"
                        color={title!=='logo' ? 'inherit' : 'success.main'} 
                        sx={{}}>
                        <Typography variant="caption" lineHeight="20px" display="flex" sx={{textDecorationLine: 'underline'}} >
                            {link}
                        </Typography>
                    </StyledLink>
                    {title!=="Orders" &&
                    <Box
                        component="img"
                        src={`/images/dashboard/arrow-right${title==='logo' ? "-green" : ""}.svg`}
                        sx={{
                        }}
                    />
                    }
                </Box>
            }

        </StyledPaper>
    );
}

export default DashboardCard;