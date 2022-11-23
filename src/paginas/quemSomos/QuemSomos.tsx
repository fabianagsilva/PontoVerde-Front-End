import "./QuemSomos.css";
import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

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
            </Box>
          </Box>
        </Grid>
      </Paper>
    </>
  );
}

export default QuemSomos;
