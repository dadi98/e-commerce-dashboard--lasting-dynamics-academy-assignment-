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
    news: {
        id: string,
        category: string,
        img: string,
        title: string,
        estimatedReading: string
    }
}

function NewsCard({news}: props): JSX.Element {
 
    return (
        <Grid item lg={6} > 
            <Link href="#" display="flex" underline="none">
            <Box
                sx={{ 
                        backgroundImage: `url(${news.img})`,
                        backgroundSize: '100% 100%' ,
                    }}
                width="100px"
                height="100px"
            />
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px', py: '8px',pl: '16px' ,maxWidth:'195px' }}>
                <Typography variant="h6" color="primary.light">
                    {news.category}
                </Typography>
                <Typography variant="h4" color="primary.main">
                    {news.title}
                </Typography>
                <Typography variant="subtitle1" color="secondary.main"  sx={{textDecorationLine: 'underline'}}>
                    Estimated reading: {news.estimatedReading}
                </Typography>
            </Box>
            </Link>
        </Grid>
    );
}

export default NewsCard;