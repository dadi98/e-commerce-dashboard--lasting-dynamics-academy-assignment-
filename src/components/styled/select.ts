import Select, {SelectProps} from "@mui/material/Select";
import { styled, } from "@mui/material/styles";

const ShopSelect = styled(Select)(({theme}) => ({
    ...theme.typography.h5,
    marginTop: "15px",
    color: theme.palette.primary.dark,
}))

export { ShopSelect }