import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './ListaCategoria.css';

function ListaCategoria() {

    const [categoria, setCategoria] = useState<Categoria[]>([])
    let navigate = useNavigate();

    const token: any = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const tipoUser: any = useSelector<TokenState, TokenState["tipoUser"]>(
        (state) => state.tipoUser
    )

    useEffect(() => {
        if (token == '') {
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
            <Box className='containerCategoria'>
                {categoria.length === 0 && <span className="loader">L &nbsp; ading</span>}

                <div className='div-categorias'>
                    {
                        categoria.map(categoria => (
                            <Box m={2} className='caixa-categorias'>
                                <Card className='categorias'>
                                    <CardContent>

                                        {/* <Typography color="textSecondary" gutterBottom>
                            categoria
                        </Typography> */}

                                        <Typography color="textSecondary" gutterBottom>
                                            Categoria
                                        </Typography>

                                        <Typography variant="h5" component="h2" className='titulo-categoria'>
                                            {categoria.tipo}
                                        </Typography>
                                    </CardContent>
                                    {tipoUser === "admin" ? (
                                        <CardActions>
                                            <Box display="flex" justifyContent="center" mb={1.5} >
                                                <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                                    <Box mx={1}>
                                                        <Button variant="contained" size='small' className='btn1'>
                                                            atualizar
                                                        </Button>
                                                    </Box>
                                                </Link>
                                                <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                                    <Box mx={1}>
                                                        <Button variant="contained" size='small' className='btn2'>
                                                            deletar
                                                        </Button>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        </CardActions>
                                    ) : (
                                        null
                                    )}
                                </Card>
                            </Box>
                        ))
                    }
                </div>
            </Box>
        </>
    );

}

export default ListaCategoria;