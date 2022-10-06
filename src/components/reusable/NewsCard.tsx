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
import { CardContentBox, CardImgBox } from "../styled/box";

import { Link as RouterLink} from "react-router-dom"

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
        <Grid item lg={6} data-testid={'news-item'}> 
            <Link 
                component={RouterLink} 
                to='/Dashboard'
                display="flex" 
                underline="none" 
                gap='16px'
            >
                <CardImgBox newsImg={news.img} />
                <CardContentBox>
                    <Typography variant="h6" color="primary.light">
                        {news.category}
                    </Typography>
                    <Typography variant="h4" color="primary.main">
                        {news.title}
                    </Typography>
                    <Typography 
                        variant="subtitle1" 
                        color="secondary.main" 
                        sx={{textDecorationLine: 'underline'}}
                    >
                        Estimated reading: {news.estimatedReading}
                    </Typography>
                </CardContentBox>
            </Link>
        </Grid>
    );
}

export default NewsCard;