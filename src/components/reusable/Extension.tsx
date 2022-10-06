import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { StyledPaper } from "../styled/paper";
import Link from "@mui/material/Link";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import { Link as RouterLink} from "react-router-dom"
import { extensionLink, extensionWrapper } from "../../styles/dashboard";

type props = {
    extension: {
        img: string,
        title: string
    }
}

function Extension({extension}: props): JSX.Element {
 
    return (
        <ImageListItem sx={extensionWrapper}>
            <Link 
                component={RouterLink} 
                underline="none" 
                to="/Dashboard"
                sx={extensionLink}
            >
                <Box
                    component="img"
                    src={extension.img}
                />
                <Typography 
                    variant="caption"
                    lineHeight="20px" >
                        { extension.title }
                </Typography>
            </Link>
        </ImageListItem>
    );
}

export default Extension;