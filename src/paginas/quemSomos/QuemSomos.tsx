import { Grid, Paper, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Box } from "@mui/material";
import "./QuemSomos.css";

function QuemSomos() {
  return (
    <>
      <Paper className="tela">
        <Grid alignItems="center" xs={12}>
          <Box p={2}>
            <Box display="flex" justifyContent="center">
              <h1>Quem Somos</h1>
            </Box>
          </Box>
          <Box className="cardsIntegrantes">

            <Box className="container-let">
              <Box className="cards">
                <div className="card">
                  <div className="blob"></div>
                  <span className="imga"></span>
                  <h2>
                    Ana Paula<br></br>
                    <span>Nunes</span>
                  </h2>
                  <h6>Desenvolvedora Full Stack Junior</h6>
                  <p>
                    <a href="https://www.linkedin.com/in/ana-paula-nunes-/">
                      <LinkedInIcon className="icon" />
                    </a>
                    <a href="https://github.com/AnaPaulaNunes">
                      <GitHubIcon className="icon2" />
                    </a>
                  </p>
                </div>
              </Box>
              <Box className="separacao"></Box>
              <Box className="apresentacao-left">
                <Typography
                  variant="h6"
                  gutterBottom
                  component="h6"
                  align="left"
                >
                  Formada em Administração, buscando novos conhecimentos, novas
                  conquistas e novos desafios para minha carreira profissional e
                  vida pessoal. Comprometida com as minhas obrigações, buscando
                  sempre ser melhor no que faço e no que me proponho a fazer. Em
                  transição de carreira para a tecnologia, começando pela
                  formação em Desenvolvedora Java FullStack Jr. na Generation
                  Brasil.
                </Typography>
              </Box>
            </Box>

            <Box className="container-let">
              <Box className="apresentacao-right-fabi">
                <Typography
                  variant="h6"
                  gutterBottom
                  component="h6"
                  align="right"
                  className="resumo2"
                >
                  Em transição de carreira da área da Saúde para TI.
                  Decidi aprender mais, comecei buscando conhecimento por conta própria, 
                  conquistei uma oportunidade no bootcamp de Desenvolvimento
                  Java full stack Jr. da Generation Brasil, onde aprimorei
                  minhas Soft skills com as sessões de BSM e desenvolvi minhas
                  Hard skills. Aprendi várias linguagens, metodologias e
                  ferramentas, tais como: Lógica de programação, Java e Spring
                  boot para Back-end, MySQL para dados, React, MaterialUI, Html,
                  CSS e TypeScript para Front-end, bem como versionamento de
                  código com Git e GitHub, foi assim que descobri minha paixão
                  pela área. Estou formada e pronta para ingressar no mercado de
                  trabalho.
                </Typography>
              </Box>
              <Box className="separacao"></Box>
              <Box className="cards">
                <div className="card">
                  <div className="blob"></div>
                  <span className="imgf"></span>
                  <h2>
                    Fabiana<br></br>
                    <span>Gonçalves</span>
                  </h2>
                  <h6>Desenvolvedora Full Stack Junior</h6>
                  <p>
                    <a href="https://www.linkedin.com/in/fabianagoncalvessilva/">
                      <LinkedInIcon className="icon" />
                    </a>
                    <a href="https://github.com/fabianagsilva">
                      <GitHubIcon className="icon2" />
                    </a>
                  </p>
                </div>
              </Box>
            </Box>

            <Box className="container-let">
              <Box className="cards">
                <div className="card">
                  <div className="blob"></div>
                  <span className="imgflavia"></span>
                  <h2>
                    Flávia<br></br>
                    <span>Santana</span>
                  </h2>
                  <h6>Desenvolvedora Full Stack Junior</h6>
                  <p>
                    <a href="https://www.linkedin.com/in/flaviasantanab/">
                      <LinkedInIcon className="icon" />
                    </a>
                    <a href="https://github.com/flrvia">
                      <GitHubIcon className="icon2" />
                    </a>
                  </p>
                </div>
              </Box>
              <Box className="separacao"></Box>
              <Box className="apresentacao-left">
                <Typography
                  variant="h6"
                  gutterBottom
                  component="h6"
                  align="left"
                >
                  Apaixonada por desenvolver soluções para diversos problemas,
                  por isso estou aqui desenvolvendo para ajudar. Deixar tudo
                  mais bonito é comigo mesmo, por isso também sou apegada ao
                  front-end. ♥
                </Typography>
              </Box>
            </Box>

            <Box className="container-let">
              <Box className="apresentacao-right">
                <Typography
                  variant="h6"
                  gutterBottom
                  component="h6"
                  align="right"
                >
                  Olá! Sou a Letícia, fascinada por tecnologia e inovação. Já
                  tive contato com a programação quando fiz um curso de web
                  design na minha adolescência mas, como sabemos, a vida não
                  segue uma linha reta. Após voltar a ter esse contato com a
                  programação, percebi que as possibilidades nessa área são
                  infinitas e que além de poder criar aplicações e sistemas
                  novos, posso resolver problemas. No bootcamp da Generation
                  estou aprendendo sobre Java, Spring Boot, banco de dados e
                  JavaScript (com react).
                </Typography>
              </Box>
              <Box className="separacao"></Box>
              <Box className="cards">
                <div className="card">
                  <div className="blob"></div>
                  <span className="img"></span>
                  <h2>
                    Leticia<br></br>
                    <span>Silva</span>
                  </h2>
                  <h6>Desenvolvedora Full Stack Junior</h6>
                  <p>
                    <a href="https://www.linkedin.com/in/silva-leticia/">
                      <LinkedInIcon className="icon" />
                    </a>
                    <a href="https://github.com/lettycodes">
                      <GitHubIcon className="icon2" />
                    </a>
                  </p>
                </div>
              </Box>
            </Box>

            <Box className="container-let">
              <Box className="cards">
                <div className="card">
                  <div className="blob"></div>
                  <span className="imgl"></span>
                  <h2>
                    Lidiane<br></br>
                    <span>Angelo</span>
                  </h2>
                  <h6>Desenvolvedora Full Stack Junior</h6>
                  <p>
                    <a href="https://www.linkedin.com/in/lidianeangelo/">
                      <LinkedInIcon className="icon" />
                    </a>
                    <a href="https://github.com/Lidianeangelo">
                      <GitHubIcon className="icon2" />
                    </a>
                  </p>
                </div>
              </Box>  <Box className="separacao"></Box>
              <Box className="apresentacao-left">
                <Typography
                  variant="h6"
                  gutterBottom
                  component="h6"
                  align="left"
                >
                  Sou publicitária de formação, atuei no mercado da comunicação desde 2019 em agências e empresas de grande porte.
                  Atualmente estou realizando minha transição de carreira para a área de TI.
                  Hoje sou Desenvolvedora Java Full Stack Jr. em formação pelo Generation Brasil, desenvolvo aplicações web utilizando Java,
                  Javascript, MySQL, HTML, CSS e React. Desde 2019 sou voluntária do grupo de Publicitários Negros.
                </Typography>
              </Box>
            </Box>

            <Box className="container-let">
              <Box className="apresentacao-right-mari">
                <Typography
                  variant="h6"
                  gutterBottom
                  component="h6"
                  align="right"
                >
                  Estudante de Psicologia pela Universidade Anhanguera
                  Institucional e formada em Análise e Desenvolvimento de
                  Sistemas pela faculdade FIAP. Eu fiz intercâmbio de 7 meses em
                  Dallas, Texas, pela Dallas Baptist University onde eu pude
                  imergir na cultura americana, adquirir um inglês fluente, eu
                  convivi com pessoas de outras culturas e pude aumentar meu
                  conhecimento sobre outras culturas e língua. Eu amo me
                  relacionar com pessoas, aprender e ensinar novas coisas. Gosto
                  de ajudar as pessoas em seu desenvolvimento pessoal.
                </Typography>
              </Box>
              <Box className="separacao"></Box>
              <Box className="cards">
                <div className="card">
                  <div className="blob"></div>
                  <span className="imgm"></span>
                  <h2>
                    Mariana<br></br>
                    <span>Rebecca</span>
                  </h2>
                  <h6>Desenvolvedora Full Stack Junior</h6>
                  <p>
                    <a href="">
                      <LinkedInIcon className="icon" />
                    </a>
                    <a href="https://github.com/marirebecca">
                      <GitHubIcon className="icon2" />
                    </a>
                  </p>
                </div>
              </Box>
            </Box>

            <Box className="container-let">
              <Box className="cards">
                <div className="card">
                  <div className="blob"></div>
                  <span className="imgt"></span>
                  <h2>
                    Thais<br></br>
                    <span>Severo</span>
                  </h2>
                  <h6>Desenvolvedora Full Stack Junior</h6>
                  <p>
                    <a href="https://www.linkedin.com/in/thais-severo/">
                      <LinkedInIcon className="icon" />
                    </a>
                    <a href="https://github.com/thaissevero">
                      <GitHubIcon className="icon2" />
                    </a>
                  </p>
                </div>
              </Box>
              <Box className="separacao"></Box>
              <Box className="apresentacao-left-thais">
                <Typography
                  variant="h6"
                  gutterBottom
                  component="h6"
                  align="left"
                >
                  Amo artes, design e tudo que envolve criação. Desde criança
                  convivo com jogos e tecnologia, e agora durante a fase adulta,
                  continuo na mesma. Em 2018 cursei História, mas por não me
                  encontrar na área, acabei entrando em transição de carreira.
                  Em 2021 tentei ingressar no bootcamp da Generation Brasil,
                  entretanto acabei falhando diversas vezes, mas isso nunca foi
                  motivo para desistir. E com muita persistência, em 2022
                  finalmente tive o prazer de ser selecionada no processo
                  seletivo, a qual constou com a iniciativa '+DEV&#123;AS&#125;
                  Por mais mulheres na tecnologia' em parceria com a McKinsey
                  Company. Atualmente busco aprender coisas novas e aprimorar
                  minhas habilidades.
                </Typography>
              </Box>
            </Box>

          </Box>
        </Grid>
      </Paper>
    </>
  );
}

export default QuemSomos;
