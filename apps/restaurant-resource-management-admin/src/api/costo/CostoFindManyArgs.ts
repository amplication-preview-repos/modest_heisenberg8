import { CostoWhereInput } from "./CostoWhereInput";
import { CostoOrderByInput } from "./CostoOrderByInput";

export type CostoFindManyArgs = {
  where?: CostoWhereInput;
  orderBy?: Array<CostoOrderByInput>;
  skip?: number;
  take?: number;
};
