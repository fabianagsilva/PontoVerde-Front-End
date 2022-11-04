import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Cadastrar.css';

function Cadastrar() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='container'>
            <Grid alignItems='center' xs={8} >
                <Box paddingX={20} >
                    <form className='forms'>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulo'>Cadastre-se</Typography>
                        <TextField id='username' label='Nome Completo' variant='outlined' name='username' margin='normal' fullWidth />
                        <TextField id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField id='foto_user' label='Foto' variant='outlined' name='foto_user' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='tipo_user' label='Tipo de usuário' variant='outlined' name='tipo_user' margin='normal' fullWidth />

                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                            </Box>
                            <Button variant="outlined" className="botao">Cadastrar</Button>
                        </Box>
                    </form>

                </Box>

            </Grid>
        </Grid>
    );
}

export default Cadastrar;