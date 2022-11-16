import React from 'react';
import './Navbar.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(""))
        toast.info("Usuário deslogado!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        navigate("/login")
    }

    var navbarComponent;

    if(token !== "") {
        navbarComponent =
        <AppBar position="static">
        <Toolbar variant="dense">
            <Box style={{ cursor: 'pointer' }}>
                <Typography variant="h5" color="inherit"> Ponto Verde. </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className= "text-decorator-none">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit"> Home </Typography>
                </Box>
                </Link>

                <Link to="/quemSomos" className="text-decorator-none">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit"> Quem somos </Typography>
                </Box>
                </Link>

                <Link to="/categoria" className="text-decorator-none">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit"> Categorias </Typography>
                </Box>
                </Link>

                <Link to="/formularioCategoria" className="text-decorator-none">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit"> Cadastrar categoria </Typography>
                </Box>
                </Link>

                <Link to="/postagens" className="text-decorator-none">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit"> Postagens </Typography>
                </Box>
                </Link>

                <Box mx={1} className= "cursor" onClick= {goLogout}>
                    <Typography variant="h6" color="inherit"> Encerrar sessão </Typography>
                </Box>
                
            </Box>
        </Toolbar>
    </AppBar>
    }
    
    return (
        <>
        {navbarComponent}
        </>
    );
};

export default Navbar;