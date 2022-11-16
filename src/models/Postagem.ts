
import Categoria from './Categoria';
import User from './User';

interface Postagem{
    id: number;
    titulo: string;
    subtitulo: string;
    texto: string;
    imagem: string;
    autor: string;
    data: string;
    audio: string;
    sugestao: string;
    categoria?: Categoria| null;
    usuario?: User| null;
}

export default Postagem;