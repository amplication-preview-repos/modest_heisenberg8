import { Costo as TCosto } from "../api/costo/Costo";

export const COSTO_TITLE_FIELD = "id";

export const CostoTitle = (record: TCosto): string => {
  return record.id?.toString() || String(record.id);
};
