
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { StyledPaper } from "../styled/paper";
import Link from "@mui/material/Link";
import ExternalLink from "./ExternalLink";
import { styled, useTheme } from "@mui/material/styles";
import TimeInterval from "./TimeInterval";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../App";

type props = {
    title: string,
    link: string,
    children?: React.ReactNode
}

/*const StyledLink = styled(Link)(({ theme }) => ({
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.sharp
    }),
    "&:hover": {
      marginRight: "9px"
    }
  }));*/

const redirects = (title: string) => {
    if(title==='Configure your shop') return '/View-your-shop';
    if(title==='Extensions Marketplace') return '/Extensions';
    if(title==='Customer support') return '/Customer-Support';
    return '/Dashboard'
}
  

function DashboardCard({title, link, children}: props): JSX.Element {
    
    const { onClick } = useContext(GlobalContext);

    const theme = useTheme()

    const handleClick = () => {
        onClick(
            redirects(title).split('/').filter(a => a!=='')
                            .pop()?.split('-').join(' ') || 'Dashboard'
                )
    }   

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
                    <Link component={RouterLink} underline="none" to={redirects(title)}
                        sx={{
                            transition: theme.transitions.create(["all"], {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.sharp
                        }),
                        "&:hover": {
                            marginRight: "9px"
                        }}}
                        onClick={handleClick}
                        color={title!=='logo' ? 'inherit' : 'success.main'}
                    >
                        <Typography variant="caption" lineHeight="20px" display="flex" sx={{textDecorationLine: 'underline'}} >
                            {link}
                        </Typography>
                    </Link>
                    {title!=="Orders" &&
                    <Box
                        component="img"
                        src={`/images/dashboard/arrow-right${title==='logo' ? "-green" : ""}.svg`}
                        
                    />
                    }
                </Box>
            }

        </StyledPaper>
    );
}

export default DashboardCard;