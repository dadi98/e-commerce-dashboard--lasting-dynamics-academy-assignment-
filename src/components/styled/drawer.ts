import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box, { BoxProps } from "@mui/material/Box";

interface StyledBoxProps extends BoxProps {
  open?: boolean;
}

const drawerWidth = 255;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: theme.spacing(9),
  
});

const DrawerHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open"
})<StyledBoxProps>(({ open, theme }) => ({
  
    ...(open ? {
        padding: "24px 23.75px 12px 20px",
      } : {
        display: "flex",
        justifyContent: "center",
        padding: "24px 0 12px",
      }
    ),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  borderRight: '1px solid rgba(10, 37, 64, 0.32)',
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open ? {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  } : {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  }),
  "& ::-webkit-scrollbar": {
    display: 'none'
    }
    
}));

export { Drawer, DrawerHeader}