import React from 'react';
import './Navbar.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';

export default function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: 'pointer' }}>
                        <Typography variant="h5" color="inherit"> Ponto Verde. </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: 'pointer' }}>
                            <Typography variant="h6" color="inherit"> Home </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: 'pointer' }}>
                            <Typography variant="h6" color="inherit"> Nosso objetivo </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: 'pointer' }}>
                            <Typography variant="h6" color="inherit"> Categorias </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: 'pointer' }}>
                            <Typography variant="h6" color="inherit"> Cadastrar categoria </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: 'pointer' }}>
                            <Typography variant="h6" color="inherit"> Encerrar sessão </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}