import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RecetaListRelationFilter } from "../receta/RecetaListRelationFilter";

export type MateriaPrimaWhereInput = {
  id?: StringFilter;
  nombre?: StringNullableFilter;
  descripcion?: StringNullableFilter;
  cantidad?: FloatNullableFilter;
  unidad?: StringNullableFilter;
  costoUnitario?: FloatNullableFilter;
  recetas?: RecetaListRelationFilter;
};
