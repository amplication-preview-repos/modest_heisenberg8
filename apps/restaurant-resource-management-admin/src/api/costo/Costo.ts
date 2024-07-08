import { Producto } from "../producto/Producto";

export type Costo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  monto: number | null;
  fecha: Date | null;
  tipoDeCosto?: "Option1" | null;
  producto?: Producto | null;
};
