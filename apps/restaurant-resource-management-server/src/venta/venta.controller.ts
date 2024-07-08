import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VentaService } from "./venta.service";
import { VentaControllerBase } from "./base/venta.controller.base";

@swagger.ApiTags("ventas")
@common.Controller("ventas")
export class VentaController extends VentaControllerBase {
  constructor(
    protected readonly service: VentaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
