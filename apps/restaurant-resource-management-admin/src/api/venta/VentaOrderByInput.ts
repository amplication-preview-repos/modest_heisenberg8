import { SortOrder } from "../../util/SortOrder";

export type VentaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fecha?: SortOrder;
  monto?: SortOrder;
  cantidad?: SortOrder;
  productoId?: SortOrder;
};
