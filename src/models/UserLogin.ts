interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    fotoUser: string;
    tipoUser: string;
    token?: string | null;
}

export default UserLogin