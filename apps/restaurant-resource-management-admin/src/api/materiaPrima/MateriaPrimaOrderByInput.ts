import { SortOrder } from "../../util/SortOrder";

export type MateriaPrimaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nombre?: SortOrder;
  descripcion?: SortOrder;
  cantidad?: SortOrder;
  unidad?: SortOrder;
  costoUnitario?: SortOrder;
  stockMinimo?: SortOrder;
};
