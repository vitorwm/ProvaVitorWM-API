import express from "express";
import { router } from "./config/routes";
import { mongoose } from "./config/database";
import cors from "cors";


const app = express();
const db = mongoose;

console.clear();

//Configuração
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(2020, () => {
  console.log("O servidor está rodando...");
});