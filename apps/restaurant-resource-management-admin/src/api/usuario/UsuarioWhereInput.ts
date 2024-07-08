import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UsuarioWhereInput = {
  id?: StringFilter;
  nombre?: StringNullableFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  rol?: "Option1";
  roles?: "Option1";
  lastLoginAt?: DateTimeNullableFilter;
};
