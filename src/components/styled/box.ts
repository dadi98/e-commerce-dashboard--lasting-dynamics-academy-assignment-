import Box, { BoxProps } from "@mui/material/Box";
import { styled, } from "@mui/material/styles";

interface StyledBoxProps extends BoxProps {
    open: boolean;
  }

const HeaderBox = styled(Box)({
    background: 'linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)',
    color: "white",
    display: "flex",
    padding: "40px 38px 103px 37px",
})

const MainBox = styled(Box)({
    margin: "-53px 41px 40px"
})

const ListItemRectangle = styled(Box)(({theme})=> ({
    width: '3px',
    height: '32px',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '20px',
}))

const ListItemContent = styled(Box)<StyledBoxProps>(({ open })=> ({
    display: "flex", 
    width: '248px', 
    padding: '4px 0 4px',
    marginLeft: open ? '4px' : '0',
    paddingLeft: open ? '13px' : '23px',
}))

const ListItemRightIcon = styled(Box)(({theme})=> ({
    color: theme.palette.primary.main,
    marginRight: '20px'
}))

const SelectItem = styled(Box)(({
    margin: "59px 24px 24px 16px"
}))


export { HeaderBox, MainBox, ListItemRectangle, ListItemContent, ListItemRightIcon, SelectItem }