import "./Quem_somos.css";
import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Box } from '@mui/material';

function quemSomos() {
    return (
        <>
            <Paper>
                <Grid alignItems='center' xs={6}>
                    <Box p={2}>
                        <Box display="flex" justifyContent='center'>
                            <h1>Quem Somos</h1>
                        </Box>
                        <Box display="flex" justifyContent='center' p={2}>
                            <h1><img src="https://i.imgur.com/WYzfxmf.png" alt="" style={{ width: '100%', height: '100%' }} /></h1>
                        </Box>
                        <Box>
                            <h4>Objetivo</h4>
                            <p>Desmistificar sobre o que é sustentabilidade para a periferia, promovendo a conscientização das atuais e futuras gerações.</p>
                            <p>Queremos que a população tenha um pensamento sustentável e explore técnicas e materiais que possam ser usados para preservar os recursos naturais em suas comunidades.</p>
                        </Box>
                    </Box>
                </Grid>
            </Paper>
        </>
    );
}

export default quemSomos;
