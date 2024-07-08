import { Venta as TVenta } from "../api/venta/Venta";

export const VENTA_TITLE_FIELD = "id";

export const VentaTitle = (record: TVenta): string => {
  return record.id?.toString() || String(record.id);
};
