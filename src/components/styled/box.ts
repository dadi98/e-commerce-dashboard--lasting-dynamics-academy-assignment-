import Box, { BoxProps } from "@mui/material/Box";
import { styled, } from "@mui/material/styles";

interface StyledBoxProps extends BoxProps {
    open?: boolean;
    title?: string;
    newsImg?: string;
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
    marginRight: '18px'
}))

const SelectItem = styled(Box)(({
    margin: "59px 24px 24px 16px"
}))

const CustomerSupport = styled(Box)(({
    display:"flex" ,
    alignItems:"center" ,
    gap:"22px"
}))

const InternalLink = styled(Box)<StyledBoxProps>(({title, theme})=>({
    display:'flex',
    alignItems: title==="Orders" ? 'flex-end' : 'center',
    height: title==="Orders"? '43px': 'auto',
    color: theme.palette.primary.light, 
    gap:'12px'
}))

const CardHeaderWrapper = styled(Box)(({
    flexGrow: 1, 
    width: '100%',
}))

const CardHeader = styled(Box)<StyledBoxProps>(({title})=>({
    display:"flex", 
    margin: title==="Latest news" ? '0 10px 0 ' : 0
}))

const CardHeaderContent = styled(Box)(({
    display: "flex",
    flexGrow: 1, 
    gap: "16px",
    alignItems: "center"
}))

const CardContentBox = styled(Box)({
    display: 'flex', 
    flexDirection: 'column', 
    gap: '8px', 
    padding: '8px 0 8px',
    paddingleft: '16px' ,
    maxWidth:'195px' 
})

const CardImgBox = styled(Box)<StyledBoxProps>(({newsImg}) => ({
    backgroundImage: `url(${newsImg})`,
    backgroundSize: '100% 100%' ,
    width: "100px",
    height: "100px"
}))


export  {    
            HeaderBox, 
            MainBox, 
            ListItemRectangle, 
            ListItemContent, 
            ListItemRightIcon, 
            SelectItem, 
            CustomerSupport,
            InternalLink,
            CardHeaderWrapper,
            CardHeader,
            CardHeaderContent,
            CardContentBox,
            CardImgBox
        }