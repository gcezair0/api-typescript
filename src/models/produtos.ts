import { categoria } from './categorias'

export class produtos {
    prod_id: number;
    prod_descricao: string;
    prod_descricao_reduzida: string;
    prod_id_categoria: number;
    prod_preco_venda: number;
    prod_preco_compra: number;
    prod_preco_atacado?: number;
    prod_preco_cartao?: number;
    prod_preco_venda_promocional?: number;
    prod_quantidade_estoque?: number;
    prod_quantidade_minima?: number;
    prod_quantidade_atacado?: number;

    constructor(
        prod_id: number, 
        prod_descricao: string, 
        prod_descricao_reduzida: string, 
        prod_id_categoria: number,
        prod_preco_venda: number, 
        prod_preco_compra: number, 
        prod_preco_atacao: number,
        prod_preco_cartao: number,
        prod_preco_venda_promocional: number,
        prod_quantidade_estoque: number,
        prod_quantidade_minima: number,
        prod_quantidade_atacado: number
    ) {
        this.prod_id = prod_id;
        this.prod_descricao = prod_descricao;
        this.prod_descricao_reduzida = prod_descricao_reduzida;
        this.prod_id_categoria = prod_id_categoria;
        this.prod_preco_venda = prod_preco_venda;
        this.prod_preco_compra = prod_preco_compra;  
        this.prod_preco_atacado = prod_preco_atacao;
        this.prod_preco_cartao = prod_preco_cartao;
        this.prod_preco_venda_promocional = prod_preco_venda_promocional;
        this.prod_quantidade_estoque = prod_quantidade_estoque;
        this.prod_quantidade_minima = prod_quantidade_minima;
        this.prod_quantidade_atacado = prod_quantidade_atacado;    
    }
}