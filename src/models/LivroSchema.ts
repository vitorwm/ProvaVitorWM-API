import { model, Schema } from "mongoose";

const livroSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo NOME do livro é obrigatório!"],
    },

    isbn: {
        type: String,
        required: [true, "O campo ISBN do livro é obrigatório!"],
      },

    preco: {
      type: Number,
      required: [true, "O campo PRECO do livro é obrigatório!"],
    },
  },


  {
    timestamps: true,
  }

  
);

export default model("livros", livroSchema);
