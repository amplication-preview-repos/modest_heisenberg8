import { Producto } from "../producto/Producto";

export type Venta = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fecha: Date | null;
  monto: number | null;
  cantidad: number | null;
  producto?: Producto | null;
};
