import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";
import { MateriaPrimaWhereUniqueInput } from "../materiaPrima/MateriaPrimaWhereUniqueInput";

export type RecetaWhereInput = {
  id?: StringFilter;
  cantidadNecesaria?: FloatNullableFilter;
  producto?: ProductoWhereUniqueInput;
  materiaPrima?: MateriaPrimaWhereUniqueInput;
};
