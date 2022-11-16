import categoria from './categoria'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    categoria?: categoria| null
}

export default Postagem;