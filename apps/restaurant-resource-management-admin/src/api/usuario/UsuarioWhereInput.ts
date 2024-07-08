import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UsuarioWhereInput = {
  id?: StringFilter;
  nombre?: StringNullableFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  rol?: "Option1";
};
