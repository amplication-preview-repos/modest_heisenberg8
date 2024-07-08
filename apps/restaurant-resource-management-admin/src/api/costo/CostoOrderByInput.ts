import { SortOrder } from "../../util/SortOrder";

export type CostoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  monto?: SortOrder;
  fecha?: SortOrder;
  tipoDeCosto?: SortOrder;
  productoId?: SortOrder;
};
