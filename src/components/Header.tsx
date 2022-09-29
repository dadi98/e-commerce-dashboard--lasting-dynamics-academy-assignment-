import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExternalLink from "./reusable/ExternalLink";

function Header(): JSX.Element {
    return ( 
        <>
            <Typography variant='h1' sx={{flexGrow: 1,}}>
                Welcome Mario!
            </Typography>
            <ExternalLink text="app.vetrinalive.it/fenoh-store" link="#" variant="h3"/>
        </>
    );
}

export default Header;