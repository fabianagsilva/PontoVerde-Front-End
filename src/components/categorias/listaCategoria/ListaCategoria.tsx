import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaCategoria.css';
import { Box } from '@mui/material';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';

function ListaCategoria() {

    const [categoria, setCategoria] = useState<Categoria[]>([])
    let navigate = useNavigate();

    const token : any = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if(token == ''){
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
            navigate("/login");
        }
    }, [token])

    async function getCategoria() {
        await busca("/categoria", setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria()
    }, [categoria.length])

    return (
        <>
        {
            categoria.map(categoria => (
            <Box m={2} >
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            categoria
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {categoria.tipo}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >
                            <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' color="primary">
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' color="secondary">
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
            ))
        }
        </>
    );

}

export default ListaCategoria;