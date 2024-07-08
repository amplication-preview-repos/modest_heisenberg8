import { SortOrder } from "../../util/SortOrder";

export type ProductoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nombre?: SortOrder;
  descripcion?: SortOrder;
  precioVenta?: SortOrder;
};
