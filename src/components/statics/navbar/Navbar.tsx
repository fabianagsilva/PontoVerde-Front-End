import React from "react";
import "./Navbar.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";
import ModalPostagem from "./../../postagens/modalPostagem/ModalPostagem";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenState: any = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const token: string = tokenState.token;
  const tipoUser: string = tokenState.tipoUser;

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate("/login");
  }

  var navbarComponent;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/cadastrar"
  ) {
    <></>;
  } else {
    if (token !== "" && token != null) {
      navbarComponent = (
        <div className={classes.root}>
          <AppBar className="navbar" position="static">
            <Toolbar>
              <Typography className="classes.title" variant="h6" noWrap>
                <img
                  src="https://i.imgur.com/1ppxRUw.png"
                  alt="Logo da página"
                  className="img"
                />
              </Typography>
              <div className="menu">
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to="/home" className="text-decorator-none">
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                  </Link>
                  <Link to="/categoria" className="text-decorator-none">
                    <MenuItem onClick={handleClose}>Categorias</MenuItem>
                  </Link>
                  {tipoUser === "admin" ? (
                    <Link
                      to="/formularioCategoria"
                      className="text-decorator-none"
                    >
                      <MenuItem onClick={handleClose}>
                        Cadastrar Categoria
                      </MenuItem>
                    </Link>
                  ) : null}
                  <Link to="/postagens" className="text-decorator-none">
                    <MenuItem onClick={handleClose}>Postagens</MenuItem>
                  </Link>
                  {tipoUser === "admin" ? (
                    <Link
                      to="/formularioPostagem"
                      className="text-decorator-none"
                    >
                      <MenuItem onClick={handleClose}>Nova Postagem</MenuItem>
                    </Link>
                  ) : null}
                  <Link to="/quemsomos" className="text-decorator-none">
                    <MenuItem onClick={handleClose}>Sobre Nós</MenuItem>
                  </Link>
                  <MenuItem className="text-decorator-none" onClick={goLogout}>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      );
    } else {
      navbarComponent = (
        <AppBar position="static" className="navbar">
          <Toolbar variant="dense">
            <Link to="/home">
              <Box className="cursor">
                <Typography variant="h5" color="inherit">
                  <img
                    src="https://i.imgur.com/1ppxRUw.png"
                    alt="Logo da página"
                    className="img"
                  />{" "}
                </Typography>
              </Box>
            </Link>

            <Box display="flex" justifyContent="start" className="navbart">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    {" "}
                    inicio{" "}
                  </Typography>
                </Box>
              </Link>

              <Link to="/quemsomos" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    {" "}
                    quem somos{" "}
                  </Typography>
                </Box>
              </Link>

              <Link to="/formularioCategoria" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    {" "}
                    projeto{" "}
                  </Typography>
                </Box>
              </Link>
            </Box>

            <Box className="login">
              <Link to="/login">
                <Button className="btn-entrar"> Entrar </Button>
              </Link>
              <Link to="/cadastrar">
                <Button className="btn-cadastrar"> Cadastre-se </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      );
    }
  }

  return <>{navbarComponent}</>;
}
