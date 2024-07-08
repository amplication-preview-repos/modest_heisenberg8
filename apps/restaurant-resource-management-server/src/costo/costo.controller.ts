import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CostoService } from "./costo.service";
import { CostoControllerBase } from "./base/costo.controller.base";

@swagger.ApiTags("costos")
@common.Controller("costos")
export class CostoController extends CostoControllerBase {
  constructor(
    protected readonly service: CostoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
