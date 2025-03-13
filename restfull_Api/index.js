import express from "express";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config()

const app = express();

const PORT = 3000;

import config from "./knexfile.js"

const db = knex(config.development)

app.use(express.json())

app.get("/", (requisicao, resposta)=>{
    resposta.send("Olá mundo")
})

app.listen(PORT,()=>{
    console.log(`O servidor está conectado na porta ${PORT}`)
})
