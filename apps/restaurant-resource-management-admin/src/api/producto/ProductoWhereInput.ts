import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CostoListRelationFilter } from "../costo/CostoListRelationFilter";
import { VentaListRelationFilter } from "../venta/VentaListRelationFilter";
import { RecetaListRelationFilter } from "../receta/RecetaListRelationFilter";

export type ProductoWhereInput = {
  id?: StringFilter;
  nombre?: StringNullableFilter;
  descripcion?: StringNullableFilter;
  precioVenta?: FloatNullableFilter;
  costos?: CostoListRelationFilter;
  ventas?: VentaListRelationFilter;
  recetas?: RecetaListRelationFilter;
};
