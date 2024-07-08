import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";

export type CostoUpdateInput = {
  monto?: number | null;
  fecha?: Date | null;
  tipoDeCosto?: "Option1" | null;
  producto?: ProductoWhereUniqueInput | null;
};
