import MenuItem from "@mui/material/MenuItem";
import { styled, } from "@mui/material/styles";

const SelectMenuItem = styled(MenuItem)(({theme}) => ({
    ...theme.typography.h5,
    padding: "16px 0 16px"
}))

export { SelectMenuItem }