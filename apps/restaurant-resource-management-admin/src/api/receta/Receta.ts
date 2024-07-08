import { Producto } from "../producto/Producto";
import { MateriaPrima } from "../materiaPrima/MateriaPrima";

export type Receta = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  cantidadNecesaria: number | null;
  producto?: Producto | null;
  materiaPrima?: MateriaPrima | null;
};
