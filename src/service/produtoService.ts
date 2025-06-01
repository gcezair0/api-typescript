import { ProdutosRepository } from "../repositories/produtosRepositories";
import { GenericRepositoryImpl } from "../utils/db-utils";
import { Pool } from 'pg';

export class ProdutoService {

    private produtosRepository: ProdutosRepository;
    private genericRepository: GenericRepositoryImpl;
    
    constructor(pool: Pool) {
        this.produtosRepository = new ProdutosRepository(pool);
        this.genericRepository = new GenericRepositoryImpl(pool);
    }

    async addProduto(dados: Record<string, any>): Promise<any> {
        try {
            return await this.genericRepository.insert('produtos', dados);
        } catch (error) {
            throw new Error(`Erro ao criar produto: ${error.message}`);
        }
    }
}