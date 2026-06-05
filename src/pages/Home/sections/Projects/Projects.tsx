import { useState } from "react"
import { Container, Typography, Card, CardContent, CardActions, Box, styled, IconButton, Fade } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import StyledButton from "../../../../components/StyledButton/StyledButton"

const ProjectCard = styled(Card)(({ theme }) => ({

    backgroundColor: "#ffffff03", 
    border: `1px solid ${theme.palette.secondary.main}15`, 
    borderRadius: "12px",
    transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    '&:hover': {
        transform: "translateY(-5px)", 
        borderColor: theme.palette.secondary.main, 
        boxShadow: `0px 8px 24px ${theme.palette.secondary.main}10`, 
    }
}))

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [slideIn, setSlideIn] = useState(true)

    const myProjects = [
        {
            id: 1,
            title: "Análise de Emendas Parlamentares",
            description: "Estudo analítico e manipulação de dados sobre a distribuição e aplicação de emendas parlamentares. Desenvolvido com foco em extração, tratamento de dados e geração de relatórios estratégicos.",
            githubUrl: "https://github.com/lfelipeos/analise-emendas-parlamentares",            
        },
        {
            id: 2,
            title: "Script Faxineiro de Downloads",
            description: "Um script em Python automatizado que organiza a sua pasta de Downloads instantaneamente, movendo arquivos soltos para pastas específicas com base nas suas extensões.",
            githubUrl: "https://github.com/lfelipeos/faxineiro-downloads",            
        },
        {
            id: 3,
            title: "Organizador de PDF",
            description: "Um software em Python com interface gráfica (GUI) projetado para resolver problema dos meus arquivos da faculdade baixados com nomes aleatórios.",
            githubUrl: "https://github.com/lfelipeos/organizador-pdf",            
        }
    ]

    const currentProject = myProjects[activeIndex]

    const handlePrev = () => {
        setSlideIn(false)
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex - 1 + myProjects.length) % myProjects.length)
            setSlideIn(true)
        }, 150)
    }

    const handleNext = () => {
        setSlideIn(false)
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % myProjects.length)
            setSlideIn(true)
        }, 150)
    }

    return (
        <>
            <Box sx={{ backgroundColor: "primary.main", py: 12, minHeight: "80vh", display: "flex", alignItems: "center" }} id="projects">
                <Container maxWidth="lg">

                    <Typography
                        variant="h2"
                        align="center"
                        sx={{ color: "primary.contrastText", mb: 2, fontWeight: "bold" }}
                    >
                        Projetos
                    </Typography>

                    <Typography
                        variant="body1"
                        align="center"
                        sx={{ color: "secondary.main", mb: 8, fontSize: "1.2rem" }}
                    >
                        Projetos desenvolvidos durante minha jornada de aprendizado, focados em análise de dados e desenvolvimento web.
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: { xs: 1, sm: 3 } }}>
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                color: "primary.contrastText",
                                backgroundColor: "#ffffff05",
                                border: "1px solid #ffffff10",
                                '&:hover': { color: "secondary.main", backgroundColor: "#ffffff10" },
                            }}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>

                        <Box sx={{ flexGrow: 1, maxWidth: "600px" }}>
                            <Fade in={slideIn} timeout={150}>
                                <div>
                                    <ProjectCard elevation={0}>
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography variant="h4" sx={{ color: "primary.contrastText", mb: 2, fontWeight: "bold" }}>
                                                {currentProject.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: "primary.contrastText", mb: 2, fontWeight: "bold" }}>
                                                {currentProject.description}
                                            </Typography>
                                        </CardContent>

                                        <CardActions sx={{ p: 4, pt: 0, flexDirection: "column", gap: 2 }}>
                                            <StyledButton onClick={() => window.open(currentProject.githubUrl, "_blank")}>
                                                <CodeIcon sx={{ mr: 1 }} />
                                                <Typography variant="button" sx={{ textTransform: "none" }}>Acessar Código</Typography>
                                            </StyledButton>
                                        </CardActions>
                                    </ProjectCard>
                                </div>
                            </Fade>
                        </Box>

                        <IconButton
                            onClick={handleNext}
                            sx={{
                                color: "primary.contrastText",
                                backgroundColor: "#ffffff05",
                                border: "1px solid #ffffff10",
                                '&:hover': { color: "secondary.main", backgroundColor: "#ffffff10" },
                            }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 4 }}>
                {myProjects.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => {
                            setSlideIn(false)
                            setTimeout(() => {
                                setActiveIndex(index)
                                setSlideIn(true)
                            }, 150)
                        }}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: index === activeIndex ? "secondary.main" : "#ffffff10",
                            transition: "background-color 0.3s ease",
                            '&:hover': { transform: "scale(1.2)" },
                        }} />
                ))}
            </Box>
        </>
    )
}

export default Projects