import { SortOrder } from "../../util/SortOrder";

export type RecetaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  cantidadNecesaria?: SortOrder;
  productoId?: SortOrder;
  materiaPrimaId?: SortOrder;
};
