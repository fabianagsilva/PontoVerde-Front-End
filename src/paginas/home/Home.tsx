import React, { useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import "./Home.css";
import { Link, useNavigate, useParams} from 'react-router-dom';

function Home() {

    return (
    <>
        <Grid container justifyContent="center" className="container">
            <Grid alignItems= "center" item xs= {6}>
                <Box paddingX={8}>
                    <Typography variant="h1" gutterBottom component="h1" align="left" className="escrito1"> Seu site de notícias sobre  Comunidades Sustentáveis</Typography>
                    <Typography variant="h5" gutterBottom component="h5" align="left" className="escrito2"> Esse é um feed de notícias para que você possa conhecer mais sobre a iniciativa da ONU, onde possamos atingir o objetivo de</Typography>
                    <Typography variant="h6" gutterBottom component="h6" align="left" className="escrito3">É por isso que convidamos você a conhecer mais sobre o que estamos fazendo!</Typography>
                </Box>
                
                
                <Box display="flex" justifyContent="left" className='button'>

                    <Link to="/postagens" className='text-decorator-none'>
                    <Button variant="outlined" className="btn-saiba">Saiba Mais</Button>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <img src="https://i.imgur.com/GDJIXMv.png" alt="Logo da página" className="imghome"/> 
            </Grid>
        </Grid>
    </>
    )
}

export default Home;