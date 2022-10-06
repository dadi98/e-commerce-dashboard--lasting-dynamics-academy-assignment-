
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
import { CardHeader, CardHeaderContent, CardHeaderWrapper, InternalLink } from "../styled/box";
import { internalLink, InternalLinkText } from "../../styles/dashboard";

type props = {
    title: string,
    link: string,
    children?: React.ReactNode
}

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
                <CardHeaderWrapper>
                    <CardHeader>
                        <CardHeaderContent>
                            <Box
                                component="img"
                                src={`/images/dashboard/${title}.svg`}
                                height='24px'
                                width='24px'
                            />
                            <Typography variant="h2" color="primary.main">
                                {title}
                            </Typography>
                        </CardHeaderContent>
                        {title === "Latest news" &&
                            <ExternalLink 
                                    text="Visit our blog"
                                    link="#" 
                                    variant="caption" 
                                    color="primary.light" 
                                    lineHeight="20px" />
                        }
                        {
                            ["Visitors", "Orders"].includes(title) &&
                                <TimeInterval />
                        }
                    </CardHeader> 
                </CardHeaderWrapper> : 
                <Box
                    component="img"
                    src="/images/dashboard/trustpilot.svg"
                />
            }
            { 
                children
            }
            { !["Latest news", "Customer support"].includes(title) &&
                <InternalLink title={title}>
                    <Link 
                        component={RouterLink} 
                        underline="none" 
                        to={redirects(title)}
                        sx={internalLink}
                        onClick={handleClick}
                        color={title!=='logo' ? 'inherit' : 'success.main'}
                    >
                        <Typography variant="caption" sx={InternalLinkText} >
                            {link}
                        </Typography>
                    </Link>
                    {title!=="Orders" &&
                    <Box
                        component="img"
                        src={`/images/dashboard/arrow-right${title==='logo' ? "-green" : ""}.svg`}
                        
                    />
                    }
                </InternalLink>
            }

        </StyledPaper>
    );
}

export default DashboardCard;