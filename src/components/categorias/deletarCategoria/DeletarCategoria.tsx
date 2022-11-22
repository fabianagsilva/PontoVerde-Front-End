import React, { useEffect, useState } from 'react'
import { Grid, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarCategoria.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';


function DeletarCategoria() {

    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [categoria, setCategoria] = useState<Categoria>()

    const token : any = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const tipoUser : any = useSelector<TokenState, TokenState["tipoUser"]>(
        (state) => state.tipoUser
    )

    useEffect(() => {
        if(token == '') {
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
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        if(id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/categoria')
        deleteId(`/categoria/${id}`, {
            headers: {
            'Authorization': token
            }
        });
        toast.success('Categoria deletado com sucesso!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
        });
    }
    
    function nao() {
        navigate('/categoria')
    }

    return (
        <>
        {tipoUser === "admin" ? (
        <Box m={2} className='caixa-deletar'>
            <Card className='card-deletar'>
                <CardContent>
                <Box justifyContent="center">
                    <Typography className="texto" gutterBottom>
                        Deseja deletar a categoria?
                    </Typography>
                    <Typography className="texto">
                    {categoria?.tipo}
                    </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                    <Box mx={2}>
                        <Button onClick={sim} variant="contained" className="botao-sim">
                            Sim
                        </Button>
                    </Box>
                    <Box mx={2}>
                        <Button onClick={nao} variant="contained" className="botao-nao">
                            Não
                        </Button>
                    </Box>
                </Box>
                </CardActions>
            </Card>
            </Box>
            ) : (
                null
            )}
        </>
    );
}
export default DeletarCategoria;