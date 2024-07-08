import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";

export type VentaWhereInput = {
  id?: StringFilter;
  fecha?: DateTimeNullableFilter;
  monto?: FloatNullableFilter;
  cantidad?: FloatNullableFilter;
  producto?: ProductoWhereUniqueInput;
};
