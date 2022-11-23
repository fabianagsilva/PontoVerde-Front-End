import { Grid, Paper, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./Projeto.css";

function Projeto() {
  return (
    <>
      <Paper className="tela">
        <Grid xs={12} className="container">
          <Grid item xs={6} className="resumo">
            <Typography
              variant="h1"
              gutterBottom
              component="h1"
              align="left"
              className="escrito1"
            >
              Resumo
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              align="left"
              className="escrito2"
            >
              Nosso projeto consiste em um feed de notícias informativo para que
              a população periférica tenha um pensamento mais sustentável e
              explore técnicas e materiais utilizados no cotidiano
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="h6"
              align="left"
              className="escrito3"
            >
              Fizemos para que possamos desmistificar sobre o que é
              sustentabilidade para a periferia, promovendo a conscientização
              das atuais e futuras gerações. O trabalho foi baseado na ODS 11,
              que busca tornar as cidades e os assentamentos humanos inclusivos,
              resilientes, sustentáveis e principalmente seguros a desastres ou
              a eventos comuns, como enchentes, alagamentos, etc.
            </Typography>
          </Grid>
          <Grid item xs={6}>
                <img src="https://i2.wp.com/codexremote.com.br/home/wp-content/uploads/2020/02/Animacao_Figura_Topo.gif?w=1080&ssl=1" alt="Logo da página" className="imgprojeto"/> 
            </Grid>
        </Grid>
        <Grid></Grid>
      </Paper>
    </>
  );
}

export default Projeto;
