import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import useLocalStorage from "react-use-localstorage";
import { login } from '../../services/Service';
import './Login.css';
import UserLogin from '../../models/UserLogin';

function Login() {

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        fotoUser: "",
        tipoUser: "",
        token: "",
    });

    let navigate = useNavigate();

    const [token, setToken] = useLocalStorage("token");

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value,
        });
    }

    async function logar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            await login('/usuarios/logar', userLogin, setToken);
            alert ("Usuário logado com sucesso!")
        } catch (error) {
            alert("Dados de usuario incorretos!")
        }
    }

    useEffect(() => {
        if (token !== " ") {
            navigate("/home");
        }
    }, [token]);
    

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={logar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se.</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;