import { Producto as TProducto } from "../api/producto/Producto";

export const PRODUCTO_TITLE_FIELD = "nombre";

export const ProductoTitle = (record: TProducto): string => {
  return record.nombre?.toString() || String(record.id);
};
