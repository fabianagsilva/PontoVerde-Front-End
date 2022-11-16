<<<<<<< HEAD
import categoria from './categoria'
=======

import Categoria from './Categoria';
import User from './User';
>>>>>>> ba565fe4dea457fd9b076609c3cf6dbde01e3278

interface Postagem{
    id: number;
    titulo: string;
    subtitulo: string;
    texto: string;
<<<<<<< HEAD
    categoria?: categoria| null
=======
    imagem: string;
    autor: string;
    data: string;
    audio: string;
    sugestao: string;
    categoria?: Categoria| null;
    usuario?: User| null;
>>>>>>> ba565fe4dea457fd9b076609c3cf6dbde01e3278
}

export default Postagem;