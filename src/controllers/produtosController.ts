import { pool } from '../config/db';
import {ProdutosRepository}  from "../repositories/produtosRepositories";
import ConsoleLogger from '../utils/consoleLogger';
import { Logger } from '../logger/logger';

const produtosRepository = new ProdutosRepository(pool);
const logger: Logger = new ConsoleLogger();


export const addProdutos = async (req: any, res: any) => {

    try {
        const produto = await produtosRepository.addEmpresa(req.body);
        res.status(201).json(produto);

    } catch (error) {
        res.status(500).json(
            { 
                message: 'Erro ao adicionar produto',
                resposta: error,
                data: []
            });
        logger.error('Erro ao adicionar o produto:', error);
    }
}