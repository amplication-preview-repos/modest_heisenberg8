import { VentaWhereInput } from "./VentaWhereInput";
import { VentaOrderByInput } from "./VentaOrderByInput";

export type VentaFindManyArgs = {
  where?: VentaWhereInput;
  orderBy?: Array<VentaOrderByInput>;
  skip?: number;
  take?: number;
};
