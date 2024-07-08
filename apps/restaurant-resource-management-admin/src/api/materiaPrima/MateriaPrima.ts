import { Receta } from "../receta/Receta";

export type MateriaPrima = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nombre: string | null;
  descripcion: string | null;
  cantidad: number | null;
  unidad: string | null;
  costoUnitario: number | null;
  recetas?: Array<Receta>;
};
