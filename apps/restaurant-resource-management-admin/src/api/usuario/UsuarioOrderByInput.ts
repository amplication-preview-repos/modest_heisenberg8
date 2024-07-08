import { SortOrder } from "../../util/SortOrder";

export type UsuarioOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nombre?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  rol?: SortOrder;
  roles?: SortOrder;
  lastLoginAt?: SortOrder;
};
