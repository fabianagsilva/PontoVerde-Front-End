import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { Box } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './CadastroPost.css';

function CadastroPost() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const tipoUser = useSelector<TokenState, TokenState["tipoUser"]>(
    (state) => state.tipoUser);

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.info('Você precisa estar logado!', {
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

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            tipo: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        subtitulo: '',
        texto: '',
        imagem: '',
        autor: '',
        data: '',
        audio: '',
        sugestao: '',
        categoria: null,
        usuario: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categoria", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso!', {
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
        back()
    }

    function back() {
        navigate('/postagens')
    }

    return (
        <>
        {tipoUser === 'admin' && <Container className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h4" color="textSecondary" align="center" >Formulário de cadastro de postagem</Typography>

                <Box display="flex" justifyContent="center">
                    <Box className="cad-right">
                        <TextField required value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" fullWidth />

                        <TextField required value={postagem.subtitulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="subtitulo" label="Subtítulo" variant="outlined" name="subtitulo" margin="normal" fullWidth />

                        <TextField required value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto" name="texto" variant="outlined" margin="normal" fullWidth multiline minRows={5} />
                    </Box>

                    <Box className="cad-left">
                        <TextField required value={postagem.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="imagem" label="Link de imagem" variant="outlined" name="imagem" margin="normal" fullWidth />

                        <TextField required value={postagem.autor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="autor" label="Autor da Postagem" variant="outlined" name="autor" margin="normal" fullWidth />

                        <TextField required value={postagem.audio} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="audio" label="Link do áudio" variant="outlined" name="audio" margin="normal" fullWidth />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, {
                                    headers: {
                                        'Authorization': token
                                    }
                                })}>
                                {
                                    categorias.map(categoria => (
                                        <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
                                    ))
                                }
                            </Select>
                            <FormHelperText>Escolha um categoria para a postagem</FormHelperText>
                            <Box className="btn-finalizar">
                                <Button type='submit' variant='contained' color='primary' disabled={categoria.id === 0}>
                                    {id === undefined ? <span>Nova postagem</span> : <span>Atualizar postagem</span>}</Button>
                            </Box>
                        </FormControl>
                    </Box>
                </Box>
            </form>
        </Container>
        }
        </>
    )
}
export default CadastroPost;