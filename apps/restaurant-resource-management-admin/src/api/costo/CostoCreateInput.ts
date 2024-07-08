import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";

export type CostoCreateInput = {
  monto?: number | null;
  fecha?: Date | null;
  tipoDeCosto?: "Option1" | null;
  producto?: ProductoWhereUniqueInput | null;
};
