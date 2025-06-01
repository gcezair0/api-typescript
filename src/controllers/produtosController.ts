import { pool } from '../config/db';
import {ProdutosRepository}  from "../repositories/produtosRepositories";

const produtosRepository = new ProdutosRepository(pool);


export const addProdutos = async (req: any, res: any) => {

    try {
        const produto = await produtosRepository.addEmpresa(req.body);
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar produto', error });
    }
}