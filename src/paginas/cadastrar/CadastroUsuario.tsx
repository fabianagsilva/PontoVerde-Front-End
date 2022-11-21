import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import "./CadastroUsuario.css";

function CadastroUsuario() {

  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    fotoUser: "",
    tipoUser: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    fotoUser: "",
    tipoUser: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Falha interna ao cadastrar!");
      }
    } else {
      alert("As senhas não conferem. Favor verificar novamente!");
      setUser({ ...user, senha: " " });
      setConfirmarSenha(" ");
    }
  }

  function selectTipo(event: ChangeEvent<any>) {
    setUser({
      ...user,
      tipoUser: event.target.value,
    });
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className="bg-usuario">
      <Grid item xs={6} alignItems="center">
        <Box className='mod-usuario'>
          <Box paddingX={20}>
            <form onSubmit={cadastrar}>
              <Typography
                variant="h3"
                gutterBottom
                component="h3"
                align="center"
                className="textos2"
              >
                Cadastre-se
              </Typography>
              <TextField
                className="label"
                value={user.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="nome"
                label="Nome completo"
                variant="outlined"
                name="nome"
                margin="normal"
                required
                fullWidth
              />
              <TextField
                className="label"
                value={user.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                label="Usuário (e-mail)"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
                required
                placeholder="digite um e-mail valido"
              />
              <TextField
                className="label"
                value={user.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                placeholder="Digite pelo menos 8 caracteres"
                required
                fullWidth
              />
              <TextField
                className="label"
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  confirmarSenhaHandle(e)
                }
                id="confirmarSenha"
                label="Confirmar senha"
                variant="outlined"
                name="confirmarSenha"
                margin="normal"
                type="password"
                required
                fullWidth
              />
              <TextField
                className="label"
                value={user.fotoUser}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="fotoUser"
                name="fotoUser"
                variant="outlined"
                label="URL da foto"
                margin="normal"
                fullWidth
              />

              <Box marginTop={2} textAlign="center">
                <Link to="/login" className="text-decorator-none">
                  <Button variant="contained" color="secondary" className="btn-cancelar">
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit" variant="contained" className="btn-concluir">
                  Cadastrar
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;