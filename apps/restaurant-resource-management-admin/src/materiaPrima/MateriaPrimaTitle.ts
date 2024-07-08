import { MateriaPrima as TMateriaPrima } from "../api/materiaPrima/MateriaPrima";

export const MATERIAPRIMA_TITLE_FIELD = "nombre";

export const MateriaPrimaTitle = (record: TMateriaPrima): string => {
  return record.nombre?.toString() || String(record.id);
};
