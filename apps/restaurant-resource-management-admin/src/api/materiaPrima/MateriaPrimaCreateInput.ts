import { RecetaCreateNestedManyWithoutMateriaPrimasInput } from "./RecetaCreateNestedManyWithoutMateriaPrimasInput";

export type MateriaPrimaCreateInput = {
  nombre?: string | null;
  descripcion?: string | null;
  cantidad?: number | null;
  unidad?: string | null;
  costoUnitario?: number | null;
  recetas?: RecetaCreateNestedManyWithoutMateriaPrimasInput;
  stockMinimo?: number | null;
};
