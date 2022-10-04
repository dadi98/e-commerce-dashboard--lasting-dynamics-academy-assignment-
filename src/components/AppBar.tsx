import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import { StyledAppBar } from "./styled/appbar";

type props = {
    clicked: string
}

function Appbar({clicked}: props): JSX.Element {
    return ( 
        <StyledAppBar position="sticky" color='inherit' elevation={0}>
            <Toolbar disableGutters>
                <Typography variant="h3" flexGrow={1}>
                    {clicked}
                </Typography>

                <Box display='flex' gap="4px">
                    <Box
                        component="img"
                        alt="zap"
                        src="/zap.svg"
                    />
                    <Link href="#" underline="none">
                        <Badge badgeContent={2} color="error">
                            <Typography 
                                variant="h4" 
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