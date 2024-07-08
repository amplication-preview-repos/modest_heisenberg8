import { CostoCreateNestedManyWithoutProductosInput } from "./CostoCreateNestedManyWithoutProductosInput";
import { VentaCreateNestedManyWithoutProductosInput } from "./VentaCreateNestedManyWithoutProductosInput";
import { RecetaCreateNestedManyWithoutProductosInput } from "./RecetaCreateNestedManyWithoutProductosInput";

export type ProductoCreateInput = {
  nombre?: string | null;
  descripcion?: string | null;
  precioVenta?: number | null;
  costos?: CostoCreateNestedManyWithoutProductosInput;
  ventas?: VentaCreateNestedManyWithoutProductosInput;
  recetas?: RecetaCreateNestedManyWithoutProductosInput;
};
