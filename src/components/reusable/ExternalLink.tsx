import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { StyledPaper } from "../styled/paper";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { url } from "inspector";

type props = {
    text: string,
    link?: string,
    color?: string,
    variant: any,
    lineHeight?: string
}

function ExternalLink({text, link, color, variant, lineHeight}: props): JSX.Element {
 
    return (
        <Box sx={{ display: 'flex', color: color, gap:'16px', alignItems: 'center', }}>
            <Link href={link} color="inherit" >
                <Typography variant={variant} lineHeight={lineHeight && lineHeight}>
                    {text}
                </Typography>
            </Link>
            <Box
                component="img"
                src={`/images/dashboard/external-link-${variant}.svg`}
            />
        </Box>
    );
}

export default ExternalLink;