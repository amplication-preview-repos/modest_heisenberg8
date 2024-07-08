import { MateriaPrimaWhereInput } from "./MateriaPrimaWhereInput";
import { MateriaPrimaOrderByInput } from "./MateriaPrimaOrderByInput";

export type MateriaPrimaFindManyArgs = {
  where?: MateriaPrimaWhereInput;
  orderBy?: Array<MateriaPrimaOrderByInput>;
  skip?: number;
  take?: number;
};
