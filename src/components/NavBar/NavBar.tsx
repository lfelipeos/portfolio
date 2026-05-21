
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { Button, styled } from "@mui/material"

const NavBar = () =>{
    const StyledToolbar = styled(Toolbar)(({  }) =>({
        display: "flex",
        justifyContent: "space-evenly",
        
    }))
  
    return (
    <>
        <AppBar position="absolute">            
            <StyledToolbar>
                <Button color="inherit">About</Button>
                <Button color="inherit">Skills</Button>
                <Button color="inherit">Projects</Button>
            </StyledToolbar>
            
        </AppBar>
    </>
  )
}

export default NavBar
