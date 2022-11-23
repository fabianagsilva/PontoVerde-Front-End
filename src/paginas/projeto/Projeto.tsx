import { Grid, Paper, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import "./Projeto.css"

function Projeto() {
  return (
    <>
     <Paper className="tela">
     <Grid alignItems="center" xs={12}>
     <Box paddingX={8}>
                    <Typography variant="h1" gutterBottom component="h1" align="left" className="escrito1"> Seu site de notícias sobre  Comunidades Sustentáveis</Typography>
                    <Typography variant="h5" gutterBottom component="h5" align="left" className="escrito2"> Esse é um feed de notícias para que você possa conhecer mais sobre a iniciativa da ONU, onde possamos atingir o objetivo de</Typography>
                    <Typography variant="h6" gutterBottom component="h6" align="left" className="escrito3">É por isso que convidamos você a conhecer mais sobre o que estamos fazendo!</Typography>
                </Box>
     </Grid>
     </Paper>
    </>
  )
}

export default Projeto