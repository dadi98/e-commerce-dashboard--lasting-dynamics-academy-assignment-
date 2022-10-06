import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { StyledPaper } from "../styled/paper";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { useNavigate, Link as RouterLink } from "react-router-dom";

type props = {
    text: string,
    link?: string,
    color?: string,
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | undefined,
    lineHeight?: string
}

function ExternalLink({text, link, color, variant, lineHeight}: props): JSX.Element {
 
    return (
        <Box sx={{ display: 'flex', color: color, gap:'16px', alignItems: 'center', }}>
            <Link component={RouterLink} color="inherit" to="/Orders">
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