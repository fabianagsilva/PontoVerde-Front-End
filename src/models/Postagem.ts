import Categoria from './Categoria'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    categoria?: Categoria | null;
}

export default Postagem;