import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import { buscaId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./CadastroCategoria.css";

function CadastroCategoria() {

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const tokenState: any = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  const token: string = tokenState.token;

  const tipoUser: string = tokenState.tipoUser;

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: "",
  });

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

    if (id !== undefined) {
      put(`/categoria`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Categoria atualizad com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      post(`/categoria`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Categoria cadastrada com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/categoria");
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className="bg-categoria">
      <Grid item xs={6} alignItems="center">
        <Box className='mod-categoria'>
          <Box paddingX={20}>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h4"
                color="textSecondary"
                component="h1"
                align="center"
              >
                Cadastrar/ Atualizar categoria
              </Typography>
              <TextField className="label"
                value={categoria.tipo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
                id="descricao"
                label="Descrição"
                variant="outlined"
                name="tipo"
                margin="normal"
                fullWidth
              />
              <Box marginTop={2} textAlign="center" className="btn">
                <Link to="/categoria" className="text-decorator-none">
                  <Button variant="contained" className="btn-cancelar">
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit" variant="contained" className="btn-concluir">
                  Concluir
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroCategoria;