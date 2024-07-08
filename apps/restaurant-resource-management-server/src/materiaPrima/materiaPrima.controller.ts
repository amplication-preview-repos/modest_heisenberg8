import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MateriaPrimaService } from "./materiaPrima.service";
import { MateriaPrimaControllerBase } from "./base/materiaPrima.controller.base";

@swagger.ApiTags("materiaPrimas")
@common.Controller("materiaPrimas")
export class MateriaPrimaController extends MateriaPrimaControllerBase {
  constructor(
    protected readonly service: MateriaPrimaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
