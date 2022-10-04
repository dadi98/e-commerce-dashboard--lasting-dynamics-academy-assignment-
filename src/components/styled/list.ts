import { styled, Theme, CSSObject } from "@mui/material/styles";
import List, { ListProps } from "@mui/material/List";
import ListItemText, { ListItemTextProps } from "@mui/material/ListItemText";
import { ListItemRectangle } from "./box";

  

const DrawerList = styled(List)(({
    padding: 0, 
    marginTop: "15px",
}))

const DrawerCollapsedList = styled(List)(({
    padding: '6px 0 6px', 
    backgroundColor: '#E9F8FE'
}))

export { DrawerList, DrawerCollapsedList }