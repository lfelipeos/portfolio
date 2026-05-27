
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { Button, styled } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
}))

const NavBar = () =>{
    const scrolltoSection = (sectionId) => {
        if (sectionId === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const offsetTop = element.offsetTop - 64;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
        }
    };

    const handleContactClick = () => {
        const mailtoLink = "mailto:lfelipeos.1991@gmail.com?subject=Contato%20via%20portfólio&body=Olá%20Luiz%2C%0A%0AEstou%20entrando%20em%20contato%20com%20você%20através%20do%20seu%20site.%0A%0AAtenciosamente%2C";
        const link = document.createElement('a');
        link.href = mailtoLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  
    return (
    <>
        <AppBar position="fixed" color="primary" sx={{ boxShadow: "none", pt: 2 }}>            
            <StyledToolbar>
                <Button onClick={() => scrolltoSection('hero')} sx={{ color: "primary.contrastText", textTransform: "none", fontSize: "1.1rem" }}>
                    <HomeIcon sx={{ mr: 1 }} />                    
                </Button>
                <Button onClick={() => scrolltoSection('about') } sx={{ color: "primary.contrastText", textTransform: "none", fontSize: "1.1rem" }}>
                    Sobre
                </Button>
                <Button onClick={() => scrolltoSection('projects')} sx={{ color: "primary.contrastText", textTransform: "none", fontSize: "1.1rem" }}>
                    Projetos
                </Button>
                <Button onClick={handleContactClick} sx={{ color: "primary.contrastText", textTransform: "none", fontSize: "1.1rem" }}>
                    Contato
                </Button>
            </StyledToolbar>
            
        </AppBar>
    </>
  )
}

export default NavBar
