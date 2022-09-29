import { styled, Theme, CSSObject } from "@mui/material/styles";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import Paper, { PaperProps } from '@mui/material/Paper';
interface StyledPaperProps extends PaperProps {
    title: string;
  }
  

export const StyledPaper = styled(Paper)<StyledPaperProps>(({title, theme}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px",
    gap: title==="Customer support" ? "16px" : "24px",
    borderRadius: "10px",
    ...(title!=="logo" ? {
            background: "#FFFFFF",
            color: theme.palette.primary.main
          } : {
            background: "#000032",
            color: 'white'
          })
    
    
}))


