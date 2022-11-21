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
                <Grid className="caixa" item xs={12}>
                        <div className="coluna1">
                        <h2> Equipe </h2>
                            <Typography className="typo1"> 
                                Ana Paula Nunes <br />
                                Fabiana Gonçalves <br />
                                Flávia Santana <br />
                                Letícia Silva <br /> 
                            </Typography> 
                            </div>
                            <div className="coluna-2"> 
                                <Typography className="typo2">
                                Lidiane Martins <br />
                                Mari Rebecca <br />
                                Thais Severo <br />
                            </Typography> </div>

                    <Grid className="coluna2" item xs={4} >
                        <Typography>
                            <h2> GitHub </h2>
                            <a href="https://github.com/Ponto-Verde"> Github </a>
                        </Typography>
                    </Grid>

                    <Grid className="coluna3" item xs={4}>
                        <Typography>
                            <h2> Navegação  </h2>
                            <Link to="/home"> Inicio  </Link>
                            <p>  Quem somos? </p>
                            <p>  Objetivo </p>
                        </Typography>
                    </Grid>
                </Grid >

                <Grid container direction="row" justifyContent="top" alignItems="center" >
                    <Grid alignItems="center" item xs={12}>
                        <Box style={{ backgroundColor: "#083B23", height: "36px" }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} > Copyright © 2020 🌱 Ponto Verde </Typography>
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