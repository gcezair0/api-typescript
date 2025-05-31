import { Router, Request, Response } from "express";

const indexRoutes = Router();

indexRoutes.get('/apis', (req: Request, res: Response) => {
        res.status(200).json({
                nome: 'API-typescript', 
                versão: '1.0.0',
                message: 'Api rodando com sucesso' 
        });

});


export default indexRoutes;