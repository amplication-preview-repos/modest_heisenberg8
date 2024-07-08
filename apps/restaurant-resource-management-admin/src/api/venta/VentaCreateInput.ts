import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";

export type VentaCreateInput = {
  fecha?: Date | null;
  monto?: number | null;
  cantidad?: number | null;
  producto?: ProductoWhereUniqueInput | null;
};
