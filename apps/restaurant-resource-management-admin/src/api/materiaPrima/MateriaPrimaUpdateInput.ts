import { RecetaUpdateManyWithoutMateriaPrimasInput } from "./RecetaUpdateManyWithoutMateriaPrimasInput";

export type MateriaPrimaUpdateInput = {
  nombre?: string | null;
  descripcion?: string | null;
  cantidad?: number | null;
  unidad?: string | null;
  costoUnitario?: number | null;
  recetas?: RecetaUpdateManyWithoutMateriaPrimasInput;
};
