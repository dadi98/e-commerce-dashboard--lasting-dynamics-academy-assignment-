import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";

function Appbar(): JSX.Element {
    return ( 
        <AppBar position="sticky" color='inherit' elevation={0} 
                sx={{
                    height: '60px',
                    display: 'flex',
                    px: '15px',
                    justifyContent: 'center',
                    }}
                >
            <Toolbar>
                <Typography variant="h3" sx={{ flexGrow: 1,}}>
                    Dashboard
                </Typography>

                <Box sx={{ display: 'flex' }}>
                    <Box
                        component="img"
                        alt="zap"
                        src="/zap.svg"
                        sx={{mr: '4px'}}
                    />
                    <Link href="#" underline="none">
                        <Badge badgeContent={2} color="error">
                            <Typography variant="h4" 
                                        sx={{
                                            fontWeight: 400,
                                            color:'primary.main',
                                            fontFamily: 'Source Sans Pro'
                                        }}>
                                            What's new
                            </Typography>
                        </Badge>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
        );
}

export default Appbar;