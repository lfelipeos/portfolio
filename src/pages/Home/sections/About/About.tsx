import { Box, Container, Grid, styled, Typography, Paper } from "@mui/material"

const StyledAbout = styled(Box)(({ theme }) =>({
    backgroundColor: theme.palette.background.paper,
    padding: "96px 0",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
}));

const SkillCard = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffff', 
    border: `1px solid ${theme.palette.primary.main}15`,
    color: theme.palette.primary.main,
    padding: "15px 20px",
    textAlign: "center",
    borderRadius: "8px",
    transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
    '&:hover': {
        transform: "translateY(-3px)",
        borderColor: theme.palette.secondary.main,
        boxShadow: `0 8px 16px ${theme.palette.secondary.main}15`,
    }
}))

const About = () => {
    
    const skills = [
        "React JS", 
        "C# .NET", 
        "JavaScript / TypeScript", 
        "Python", 
        "SQL", 
        "Data Analysis"
    ]

    return (
        <StyledAbout id="about">
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    
                    
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography 
                            variant="h2" 
                            sx={{ color: "primary.main", mb: 3, fontWeight: "bold" }}
                        >
                            Sobre Mim
                        </Typography>
                        
                        <Typography 
                            variant="body1" 
                            sx={{ color: "primary.main", opacity: 0.8, mb: 2, lineHeight: 1.8, fontSize: "1.1rem" }}
                        >
                            Profissional em transição de carreira para a área de Tecnologia, atualmente graduando em Análise e Desenvolvimento de Sistemas. Combino uma sólida experiência de mais de 10 anos em atendimento ao cliente, negociação e vendas complexas com o desenvolvimento constante de competências técnicas em programação e análise de dados.
                        </Typography>
                        
                        <Typography 
                            variant="body1" 
                            sx={{ color: "primary.main", opacity: 0.8, lineHeight: 1.8, fontSize: "1.1rem" }}
                        >
                            Excelente comunicação interpessoal, facilidade para trabalhar em equipe e perfil analítico focado na resolução de problemas. Busco oportunidade para atuar como Estagiário, Assistente ou Desenvolvedor Júnior.
                        </Typography>
                    </Grid>

                    
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography 
                            variant="h3" 
                            sx={{ color: "secondary.main", mb: 4, fontWeight: "bold", fontSize: "2rem" }}
                        >
                            Skills
                        </Typography>
                        
                        
                        <Grid container spacing={2}>
                            {skills.map((skill, index) => (
                                <Grid size={{ xs: 6, sm: 4, md: 6 }} key={index}>
                                    <SkillCard elevation={0}>
                                        <Typography variant="subtitle1" fontWeight="medium">
                                            {skill}
                                        </Typography>
                                    </SkillCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </StyledAbout>
    )
}

export default About