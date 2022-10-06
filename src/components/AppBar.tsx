import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import { StyledAppBar } from "./styled/appbar";
import {Link as RouterLink} from "react-router-dom"

type props = {
    clicked: string,
    onClick: (text: string) => void
}

function Appbar({clicked, onClick}: props): JSX.Element {
    return ( 
        <StyledAppBar position="sticky" color='inherit' elevation={0}>
            <Toolbar disableGutters>
                <Typography variant="h3" component={"h3"} flexGrow={1}>
                    {clicked}
                </Typography>

                <Box display='flex' gap="4px">
                    <Box
                        component="img"
                        alt="zap"
                        src="/zap.svg"
                    />
                    <Link component={RouterLink} to="/Dashboard" 
                          onClick={() => onClick('Dashboard')}
                          underline="none">
                        <Badge badgeContent={2} color="error">
                            <Typography 
                                variant="h4" 
                                component={'div'}
                                color={ theme => theme.palette.primary.main }
                                fontFamily="Source Sans Pro"
                                fontWeight={400}
                            >
                                What's new
                            </Typography>
                        </Badge>
                    </Link>
                </Box>
            </Toolbar>
        </StyledAppBar>
        );
}

export default Appbar;