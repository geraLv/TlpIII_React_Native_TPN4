import express from "express";
import db_users from "../services/db_users";
const router = express.Router();

export default router.post("/", (req, res) => {
  const { user, pass } = req.body;

  if (!user || !pass) {
    res.status(400).json({ error: "Usuario no registrado" });
  }
  const buscarUsuario = db_users.find(
    (usuario) => usuario.pass == pass && usuario.user == user
  );
  buscarUsuario
    ? res.json({
        message: "Usuario encontrado",
        usuario: buscarUsuario,
      })
    : res.status(400).json({ error: "Usuario no encontrado" });
});
