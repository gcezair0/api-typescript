import { GenericRepositoryImpl } from '../utils/db-utils';
import {Pool} from 'pg'
import {produtos} from '../models/produtos';

export class ProdutosRepository {
    private genericRepository: GenericRepositoryImpl;
    private produtosRepository: ProdutosRepository;

    constructor (pool: Pool) {
        this.genericRepository = new GenericRepositoryImpl(pool);
    } 

    async addEmpresa(dados: Record<string, any>): Promise<produtos> {
       
        return this.produtosRepository.addEmpresa(dados);

    }

}
