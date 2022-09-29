import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { StyledPaper } from "../styled/paper";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type props = {
    text: string,
    link?: string,
    color?: string,
    variant: any,
    lineHeight?: string
}

function TimeInterval(): JSX.Element {
 
    return (
        <Box sx={{ display: 'flex', color: '#666666', gap:'8px', alignItems: 'center', }}>
            
            <Typography variant="h5" lineHeight="18px">
                This month
            </Typography>
            
            <ExpandMoreIcon fontSize="small"/>
        </Box>
    );
}

export default TimeInterval;