import { Request, Response } from "express";
import LivroSchema from "../models/LivroSchema";


class LivroController {
  async listar(request: Request, response: Response) {
    const livros = await LivroSchema.find();
    response.status(200).json(livros);
  }

  async buscarPorIsbn(request: Request, response: Response) {
    const {isbn } = request.params;
    

    try {
      const livro = await LivroSchema.findOne({ isbn : isbn });

      if(livro === null)
      {
        response.status(404).json({ msg: "O livro não existe!"});
      }

      response.status(200).json(livro);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async cadastrar(request: Request, response: Response) {
    const {isbn } = request.body;


    try {
        const livro = await LivroSchema.findOne({ isbn  });

        console.log(isbn);

        if(livro === null)
        {
            const novoLivro = await LivroSchema.create(request.body);
            response.status(201).json(novoLivro,);
        }

        else{
              response.status(404).json({ msg: "O livro já existe!"});
        }


    } catch (error) {
      response.status(400).json(error);
    }
  }




  async remover(request: Request, response: Response) {
    const { isbn } = request.params;
    
    try {
      const livro = await LivroSchema.findOneAndDelete({ isbn : isbn });

      if(livro === null)
      {
        response.status(404).json({ msg: "O livro não existe!"});
      }
      response.status(200).json({ msg: "O livro foi deletado com sucesso!"});
    } catch (error) {
      response.status(400).json(error);
    }
  }



  async alterar(request: Request, response: Response) {
    const { isbn } = request.body;
    const livroAlterado = request.body;
    
    try {
      const livro = await LivroSchema.findOneAndUpdate({ isbn : isbn }, livroAlterado);

      if(livro === null)
      {
        response.status(404).json({ msg: "O livro não existe!"});
      }
      response.status(200).json({ msg: "O livro foi alterado com sucesso!"});
    } catch (error) {
      response.status(400).json(error);
    }
  }


}

  export { LivroController };