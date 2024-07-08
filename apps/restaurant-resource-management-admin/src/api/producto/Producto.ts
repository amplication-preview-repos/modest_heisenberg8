import { Costo } from "../costo/Costo";
import { Venta } from "../venta/Venta";
import { Receta } from "../receta/Receta";

export type Producto = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nombre: string | null;
  descripcion: string | null;
  precioVenta: number | null;
  costos?: Array<Costo>;
  ventas?: Array<Venta>;
  recetas?: Array<Receta>;
};
