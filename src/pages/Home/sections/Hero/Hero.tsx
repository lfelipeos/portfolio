import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email'
import StyledButton from "../../../../components/StyledButton/StyledButton"
import { AnimatedBackground } from "../../../../components/AnimatedBackgroung/AnimatedBackgroung"

const Hero = () =>{

    const StyledHero = styled("div")(({ theme }) =>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImg = styled("img")(({ theme }) =>({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        
    }))
  
return (
    <>
      <StyledHero>

        <Container>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box sx={{ position: "relative", pb: 3 }}>
                        <Box sx={{ position: "absolute", width: "150%", top: -100, right: 0, zIndex: 1 }}>
                            <AnimatedBackground />
                        </Box>
                        <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                            <StyledImg src={Avatar} />
                        </Box>
                    </Box>
                    
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography sx={{ color: "primary.contrastText" }} variant="h1" align="center" pb={2}>
                        Luiz Santos
                    </Typography>
                    <Typography sx={{ color: "primary.contrastText" }} variant="h2" align="center">
                        Full Stack Developer
                    </Typography>
                    <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }} pt={3}>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>                        
                            <StyledButton>
                                <DownloadIcon/><Typography>Download CV</Typography>
                            </StyledButton>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <StyledButton>
                                <EmailIcon /><Typography>Contact Me</Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        
        
      </StyledHero>
    </>
  )
}

export default Hero
