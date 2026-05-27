import { Box, Container, Typography, IconButton, styled } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const StyledFooter = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main.light,
    color: theme.palette.primary.contrastText,
    padding: "40px 0",
    borderTop: `1px solid ${theme.palette.secondary.main}22`,
    textAlign: "center",
}));

const Footer = () =>{
    const currentYear = new Date().getFullYear();

    const handleContactClick = () => {
        const mailtoLink = "mailto:lfelipeos.1991@gmail.com?subject=Contato%20via%20portfólio&body=Olá%20Luiz%2C%0A%0AEstou%20entrando%20em%20contato%20com%20você%20através%20do%20seu%20site.%0A%0AAtenciosamente%2C";
        const link = document.createElement('a');
        link.href = mailtoLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <StyledFooter component="footer">
            <Container maxWidth="lg">
                <Box mt={2}>
                    <IconButton href="https://github.com/lfelipeos" target="_blank" rel="noopener noreferrer" sx={{ color: "primary.contrastText", '&:hover': { color: "secondary.main" } }}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/lfelipeos" target="_blank" rel="noopener noreferrer" sx={{ color: "primary.contrastText", '&:hover': { color: "secondary.main" } }}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton onClick={handleContactClick} sx={{ color: "primary.contrastText", '&:hover': { color: "secondary.main" } }}>
                        <EmailIcon />
                    </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    &copy; {currentYear} Luiz Santos. Todos os direitos reservados.
                </Typography>
            </Container>
        </StyledFooter>
    );
};

export default Footer;