export class categoria {
    cat_id: number;
    cat_nome: string;
    cat_descricao: string;
    cat_quantidade_fracionado?: number;


    constructor(cat_id: number, cat_nome: string, cat_descricao: string, cat_quantidade_fracionado?: number) {
        this.cat_id = cat_id;
        this.cat_nome = cat_nome;
        this.cat_descricao = cat_descricao;
        this.cat_quantidade_fracionado = cat_quantidade_fracionado;
    }
}