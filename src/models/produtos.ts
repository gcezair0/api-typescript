import { categoria } from './categorias'

export class produtos {
    id: number;
    nome: string;
    preco_venda: number;
    preco_compra: number;
    categoria: categoria;
 
    constructor(id: number, nome: string, preco_venda: number, preco_compra: number, categoria: categoria) {
        this.id = id;
        this.nome = nome;
        this.preco_venda = preco_venda;
        this.preco_compra = preco_compra;  
        this.categoria = categoria;
    }
}