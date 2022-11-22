import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== "") {
        footerComponent = (
            <footer>
                <Grid className="corfundo"></Grid>
                            <hr></hr>
                <Grid className="caixa" item xs={12} >                
                        <Typography>
                            <h2> Equipe </h2>
                            Ana Paula Nunes <br />
                            Fabiana Gonçalves <br />
                            Flávia Santana <br />
                            Letícia Silva <br />
                        </Typography>
                        
                    <Grid item xs={2}>
                        <Typography>
                            <h2 className='invisivel'> - </h2>
                            Lidiane Martins <br />
                            Mari Rebecca <br />
                            Thais Severo <br />
                        </Typography>
                    </Grid>

                    <Grid item xs={3} >
                        <Typography>
                            <h2> GitHub </h2>
                            <Typography> <a href="https://github.com/flrvia/PontoVerde-Front-End" target="_blank"> Repositório</a> • Front-end </Typography>
                            <Typography> <a href='https://github.com/thaissevero/Projeto_Integrador_Backend' target="_blank"> Repositório</a> • Back-end </Typography>
                        </Typography>
                    </Grid>

                    <Grid >
                        <Typography>
                            <h2> Navegação  </h2>
                            <Typography> • <Link to="/home" target="_blank">Inicio</Link></Typography>
                            <Typography> • <Link to="/quemsomos" target="_blank">Quem somos</Link></Typography>
                            <Typography> • <Link to="/projetos" target="_blank">Objetivo</Link></Typography>
                        </Typography>
                    </Grid>
                </Grid >

                <Grid container direction="row" justifyContent="top" alignItems="center" >
                    <Grid alignItems="center" item xs={12}>
                        <Box style={{ backgroundColor: "#083B23", height: "36px" }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} > Copyright © 2022 🌱 Ponto Verde </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </footer >
        )
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;