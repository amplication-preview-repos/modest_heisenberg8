import { Receta as TReceta } from "../api/receta/Receta";

export const RECETA_TITLE_FIELD = "id";

export const RecetaTitle = (record: TReceta): string => {
  return record.id?.toString() || String(record.id);
};
