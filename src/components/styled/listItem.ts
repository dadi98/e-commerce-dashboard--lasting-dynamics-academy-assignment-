import { styled, Theme, CSSObject } from "@mui/material/styles";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
interface StyledListItemProps extends ListItemProps {
    clicked?: string;
    text?: string;
  }
  

const StyledListItem = styled(ListItem)<StyledListItemProps>(({clicked, text, theme}) => ({
    height: 32,
    ...(clicked===text ? { 
          color: theme.palette.primary.light,
          
        } : {
          color: theme.palette.primary.main,
        })
}))

export { StyledListItem }

