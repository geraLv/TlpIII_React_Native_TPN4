import express from "express";
import register from "./routes/register";
import login from "./routes/login";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(cors());
app.use(cors({ origin: "http://localhost:8081" }));

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log(`a.v`);
  res.send("pong");
});

app.use("/api/register", register);

app.use("/api/login", login);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
