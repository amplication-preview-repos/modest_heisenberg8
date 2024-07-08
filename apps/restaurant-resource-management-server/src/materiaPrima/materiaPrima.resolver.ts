import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MateriaPrimaResolverBase } from "./base/materiaPrima.resolver.base";
import { MateriaPrima } from "./base/MateriaPrima";
import { MateriaPrimaService } from "./materiaPrima.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MateriaPrima)
export class MateriaPrimaResolver extends MateriaPrimaResolverBase {
  constructor(
    protected readonly service: MateriaPrimaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
