const titulos = [
  {
    titulo: "Regar",
    Planta: ["Rosas", "Girasol", "cactus", "planta4", "planta5"],
  },
  { titulo: "Podar", Rosas: true, Duranta: false, tuna: true },
  { titulo: "Abonar", Rosas: true, Duranta: false, tuna: true },
  { titulo: "Sembrar", Rosas: true, Duranta: false, tuna: true },
  { titulo: "Limpiar", Rosas: true, Duranta: false, tuna: true },
];
const planta = ["Rosas", "Girasol", "cactus", "planta4", "planta5"];
export const publicaciones = Array.from({ length: 5 }, (_, i) => ({
  id: `${i + 1}`,
  titulo: `Tarea número ${i + 1}: ${titulos[i].titulo}`,
  contenido: `Este es el contenido de la publicación ${i + 1}.`,
  comentarios: Array.from({ length: 5 }, (_, j) => ({
    id: `${(i + 1) * 10 + j}`,
    texto: `Subtares ${j + 1} ${titulos[i].titulo} ${planta[j]}`,
  })),
}));
