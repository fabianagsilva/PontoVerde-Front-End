import { Grid, Paper, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./Projeto.css";

function Projeto() {
  return (
    <>
      <Paper className="tela">
        <Box className="separaçao"></Box>
        <Grid xs={12} className="container1">
          <Grid item xs={6} className="resumo">
            <Typography
              variant="h1"
              gutterBottom
              component="h1"
              align="left"
              className="escrito1a"
            >
              Resumo
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              align="left"
              className="escrito2a"
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
              className="escrito3a"
            >
              Fizemos para que possamos desmistificar sobre o que é
              sustentabilidade para a periferia, promovendo a conscientização
              das atuais e futuras gerações. O trabalho foi baseado na ODS 11,
              que busca tornar as cidades e os assentamentos humanos inclusivos,
              resilientes, sustentáveis e principalmente seguros a desastres ou
              a eventos comuns, como enchentes, alagamentos, etc.
            </Typography>
          </Grid>
          <Grid item xs={6} className="imagem12">
                <img src="https://i2.wp.com/codexremote.com.br/home/wp-content/uploads/2020/02/Animacao_Figura_Topo.gif?w=1080&ssl=1" alt="Logo da página" className="imgprojeto"/> 
            </Grid>
        </Grid>
        <Grid  className="container2">
        <Grid item xs={6} className="imagem11">
        <img src="https://www.primeirainfanciaempauta.org.br/img/11ODS.png" alt="Logo da página" className="imgprojeto1"/>
        </Grid>
        <Grid item xs={6} className="resumo1">
        <Typography
              variant="h1"
              gutterBottom
              component="h1"
              align="left"
              className="escrito1a"
            >
              Problema
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              align="left"
              className="escrito2a"
            >
              Sabemos que as populações em situação de vulnerabilidade social são as que mais sofrem com os impactos do meio ambiente.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="h6"
              align="left"
              className="escrito3a"
            >

              
Os impactos da devastação não afetam a todos da mesma forma. São pessoas que possuem menos acessos a recursos naturais e sociais que são atingidas. Consequentemente, são as que menos podem contribuir para a emergência climática global causadas pelas empresas e grandes corporações.
Exemplo: Covid-19 (população)
<br />
"Hoje a política acontece do centro para a periferia. A gente precisa inverter essa lógica, pautar da periferia para os outros espaços" <br />
<em>Amanda Costa, 25, ativista climática e criadora do PerifaSustentável</em>

            </Typography>
          </Grid>
          </Grid>
          <Grid xs={12} className="container1">
          <Grid item xs={6} className="resumo">
            <Typography
              variant="h1"
              gutterBottom
              component="h1"
              align="left"
              className="escrito1a"
            >
              Solução
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              align="left"
              className="escrito2a"
            >
              Ponto Verde é um feed de notícias informativo para que a população periférica tenha um pensamento mais sustentável e explore técnicas e materiais utilizados no cotidiano, com o intuito de preservar os recursos naturais em suas comunidades
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="h6"
              align="left"
              className="escrito3a"
            >
             Nosso propósito é trazer essas discussões para a periferia. Dar mais acesso à educação ambiental, quebrar o privilégio do acesso à informação. Queremos desmistificar sobre o que é sustentabilidade para esse  público, promovendo a conscientização das atuais e futuras gerações.
            </Typography>
          </Grid>
          <Grid item xs={6} className="imagem13">
                <img src="https://i.pinimg.com/originals/e5/7c/e1/e57ce195528ef472074b16552d0440e8.gif" alt="Logo da página" className="imgprojeto"/> 
            </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Projeto;
