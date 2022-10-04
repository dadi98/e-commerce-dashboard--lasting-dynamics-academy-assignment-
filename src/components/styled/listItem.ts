import { styled, Theme, CSSObject } from "@mui/material/styles";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemText, { ListItemTextProps } from "@mui/material/ListItemText";
interface StyledListItemProps extends ListItemProps {
    clicked?: string;
    text?: string;
    open?: boolean;
  }
interface StyledListItemTextProps extends ListItemTextProps {
    open?: boolean;
}
  

const StyledListItem = styled(ListItem)<StyledListItemProps>(({clicked, text, theme}) => ({
    height: 32,
    ...(clicked===text ? { 
          color: theme.palette.primary.light,
          
        } : {
          color: theme.palette.primary.main,
        })
}))

const StyledListItemText = styled(ListItemText)<StyledListItemTextProps>(({ open }) => ({
    opacity: open ? 1 : 0,
    paddingLeft: '16px'
}))

export { StyledListItem, StyledListItemText }

