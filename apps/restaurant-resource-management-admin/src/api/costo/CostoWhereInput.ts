import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";

export type CostoWhereInput = {
  id?: StringFilter;
  monto?: FloatNullableFilter;
  fecha?: DateTimeNullableFilter;
  tipoDeCosto?: "Option1";
  producto?: ProductoWhereUniqueInput;
};
