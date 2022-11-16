import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import categoria from '../../../models/categoria'
import './Listacategoria.css';
import { Box } from '@mui/material';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Listacategoria() {

    const [categoria, setcategoria] = useState<categoria[]>([])
    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

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

    async function getcategoria() {
        await busca("/categoria", setcategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getcategoria()
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
                            {categoria.descricao}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >
                            <Link to={`/formulariocategoria/${categoria.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' color="primary">
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarcategoria/${categoria.id}`} className="text-decorator-none">
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

export default Listacategoria;