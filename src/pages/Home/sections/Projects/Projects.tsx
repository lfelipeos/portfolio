import { Container, Grid, Typography, Card, CardContent, CardActions, Box, styled } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code'
import DescriptionIcon from '@mui/icons-material/Description'
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
    
    const myProjects = [
        {
            id: 1,
            title: "Análise de Emendas Parlamentares",
            description: "Estudo analítico e manipulação de dados sobre a distribuição e aplicação de emendas parlamentares. Desenvolvido com foco em extração, tratamento de dados e geração de relatórios estratégicos.",
            githubUrl: "https://github.com/lfelipeos/analise-emendas-parlamentares",
            pptUrl: "https://docs.google.com/presentation/d/seu-slide" 
        }
    ]

    return (
        <Box sx={{ backgroundColor: "primary.main", py: 12, minHeight: "80vh" }} id="projects">
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
                    Aplicações e documentações das soluções desenvolvidas.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {myProjects.map((project) => (
                        <Grid size={{ xs: 12, sm: 8, md: 6 }} key={project.id}>
                            <ProjectCard elevation={0}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h4" sx={{ color: "primary.contrastText", mb: 2, fontWeight: "bold" }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "primary.contrastText", opacity: 0.7, lineHeight: 1.7 }}>
                                        {project.description}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ p: 4, pt: 0, flexDirection: "column", gap: 2 }}>
                                    
                                    <StyledButton onClick={() => window.open(project.githubUrl, "_blank")}>
                                        <CodeIcon sx={{ mr: 1 }} />
                                        <Typography variant="button" sx={{ textTransform: "none" }}>Acessar Código</Typography>
                                    </StyledButton>

                                    <StyledButton onClick={() => window.open(project.pptUrl, "_blank")}>
                                        <DescriptionIcon sx={{ mr: 1 }} />
                                        <Typography variant="button" sx={{ textTransform: "none" }}>Ver Apresentação PPT</Typography>
                                    </StyledButton>

                                </CardActions>
                            </ProjectCard>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    )
}

export default Projects