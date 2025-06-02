import express from "express";
import db_users from "../services/db_users";
const router = express.Router();

router.get("/", (_req, res) => {
  res.json(db_users);
});

router.post("/", (req, res) => {
  const { user, pass } = req.body;

  if (!user || !pass) {
    res.status(400).json({ error: "Faltan datos" });
  }
  db_users.push({ user, pass });

  res.json({ message: "Se registro el capo", user: { user } });
});

export default router;
