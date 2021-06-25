import { Router } from "express";
import { LivroController } from "../controllers/LivroController";

const router = Router();
const livroController = new LivroController();

//Métodos HTTP ->
//GET  -> Solicita um determinado recurso do servidor
//POST -> Envia um recurso para o servidor

router.post("/livro/cadastrar", livroController.cadastrar);

router.get("/livro/listar", livroController.listar);

router.get("/livro/buscar/isbn/:isbn", livroController.buscarPorIsbn)

router.put("/livro/alterar", livroController.alterar);

router.delete("/livro/remover/isbn/:isbn", livroController.remover);


export { router };
