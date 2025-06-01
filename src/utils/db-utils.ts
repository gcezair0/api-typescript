import { Pool } from 'pg';

interface GenericRepository {
    pool: Pool;
    insert: (tabela: string, dados: Record<string, any>) => Promise<any>;
    update: (tabela: string, id: string, id_valor: string, dados: Record<string, any>) => Promise<any>;
    select: (tabela: string, coluna: string, valor: string) => Promise<any | null>;
}

export class GenericRepositoryImpl implements GenericRepository {
    pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async insert(tabela: string, dados: Record<string, any>): Promise<any> {
        const client = await this.pool.connect();
        try {
            await client.query('BEGIN'); 
            
            const camposFiltrados = Object.entries(dados).filter(([_, value]) => value !== undefined && value !== null);
            const colunas = camposFiltrados.map(([key]) => key).join(', ');
            const valores = camposFiltrados.map(([_, value]) => value);
            const placeholders = camposFiltrados.map((_, index) => `$${index + 1}`).join(', ');
            
            const query = `INSERT INTO ${tabela} (${colunas}) VALUES (${placeholders}) RETURNING *;`;
            console.log("Query gerada:", query);
            console.log("Valores passados:", valores);

            const result = await client.query(query, valores);
            await client.query('COMMIT'); 

            return result.rows[0];
        } catch (error) {
            await client.query('ROLLBACK'); 
            console.error("Erro ao inserir dados:", error);
            throw new Error("Erro ao inserir dados");
        } finally {
            client.release(); 
        }
    }

    async update(tabela: string, id: string, id_valor: string, dados: Record<string, any>): Promise<any> {
        const client = await this.pool.connect();
        try {
            await client.query('BEGIN');
            
            const camposFiltrados = Object.entries(dados).filter(([_, value]) => value !== undefined && value !== null).map(([key, value]) => `${key} = '${value}'`).join(', ');
            const valorFormatado = isNaN(Number(id_valor)) ? `'${id_valor}'` : id_valor;
            const query = `UPDATE ${tabela} SET ${camposFiltrados} WHERE ${id} = ${valorFormatado} RETURNING *;`;
            
            const result = await client.query(query);
            await client.query('COMMIT'); 

            return result.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            console.error("Erro ao atualizar dados:", error);
            throw new Error("Erro ao atualizar dados");
        } finally {
            client.release(); 
        }
    }

    async select(tabela: string, coluna: string, valor: string): Promise<any | null> {
        const query = `SELECT * FROM ${tabela} WHERE ${coluna} = '${valor}';`;

        try {
            const result = await this.pool.query(query);
            return result.rows[0];
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            throw new Error("Erro ao buscar dados");
        }
    }

    
    async selectAll(tabela: string): Promise<any | null> {
        const query = `SELECT * FROM ${tabela};`;

        try {
            const result = await this.pool.query(query);
            return result.rows;
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            throw new Error("Erro ao buscar dados");
        }
    }
}
