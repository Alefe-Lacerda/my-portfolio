import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"
import theme from "../../theme"



const NavBar = () => {

    const StyledToobar = styled(Toolbar)(()=> ({
        display: "flex",
        justifyContent: "space-evenly",
        background: theme.palette.secondary.main
    }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToobar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Project</MenuItem>
            </StyledToobar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar