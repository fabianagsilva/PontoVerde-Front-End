import React, { useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import "./Home.css";
import { Link, useNavigate, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalDelete from './../../components/postagens/modalDelete/ModalDelete';

function Home() {

   const tipoUser = useSelector<TokenState, TokenState["tipoUser"]>(
    (state) => state.tipoUser);

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
            navigate("/login")
        }
    }, [token])
    
    return (
    <>
        <Grid container justifyContent="center" className="container">
            <Grid alignItems= "center" item xs= {6}>
                <Box paddingX={15}>
                    <Typography variant="h3" gutterBottom component="h3" align="center" className="escritos"> Seja Bem Vindo(a)!</Typography>
                    <Typography variant="h5" gutterBottom component="h5" align="center" className="escritos"> Acompanhe as postagens do nosso feed de notícias!</Typography>
                </Box>
                
                
                <Box display="flex" justifyContent="center">
                {/* {tipoUser === "admin" ? ( */}
                    <Box marginRight={1}>
                        <ModalPostagem />
                    </Box>
                    {/* ) : (
                        null
                    )} */}

                    <Link to="/postagens" className='text-decorator-none'>
                    <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <img src="https://i.imgur.com/WYzfxmf.png" alt="Logo da página" className="img"/>
            </Grid>
            <Grid xs={12} className="postagem">
                <TabPostagem />
            </Grid>
        </Grid>
    </>
    )
}

export default Home;