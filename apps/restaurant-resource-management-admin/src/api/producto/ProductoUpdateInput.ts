import { CostoUpdateManyWithoutProductosInput } from "./CostoUpdateManyWithoutProductosInput";
import { VentaUpdateManyWithoutProductosInput } from "./VentaUpdateManyWithoutProductosInput";
import { RecetaUpdateManyWithoutProductosInput } from "./RecetaUpdateManyWithoutProductosInput";

export type ProductoUpdateInput = {
  nombre?: string | null;
  descripcion?: string | null;
  precioVenta?: number | null;
  costos?: CostoUpdateManyWithoutProductosInput;
  ventas?: VentaUpdateManyWithoutProductosInput;
  recetas?: RecetaUpdateManyWithoutProductosInput;
};
