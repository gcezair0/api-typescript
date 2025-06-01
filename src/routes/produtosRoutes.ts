import { Router, Request, Response } from "express";
import * as produtosController from "../controllers/produtosController";

const produtosRoutes = Router();
produtosRoutes.get('/produtos', produtosController.addProdutos); 