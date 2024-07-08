import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";
import { MateriaPrimaWhereUniqueInput } from "../materiaPrima/MateriaPrimaWhereUniqueInput";

export type RecetaUpdateInput = {
  cantidadNecesaria?: number | null;
  producto?: ProductoWhereUniqueInput | null;
  materiaPrima?: MateriaPrimaWhereUniqueInput | null;
};
