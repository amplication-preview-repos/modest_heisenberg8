/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { MateriaPrima } from "./MateriaPrima";
import { MateriaPrimaCountArgs } from "./MateriaPrimaCountArgs";
import { MateriaPrimaFindManyArgs } from "./MateriaPrimaFindManyArgs";
import { MateriaPrimaFindUniqueArgs } from "./MateriaPrimaFindUniqueArgs";
import { CreateMateriaPrimaArgs } from "./CreateMateriaPrimaArgs";
import { UpdateMateriaPrimaArgs } from "./UpdateMateriaPrimaArgs";
import { DeleteMateriaPrimaArgs } from "./DeleteMateriaPrimaArgs";
import { RecetaFindManyArgs } from "../../receta/base/RecetaFindManyArgs";
import { Receta } from "../../receta/base/Receta";
import { MateriaPrimaService } from "../materiaPrima.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MateriaPrima)
export class MateriaPrimaResolverBase {
  constructor(
    protected readonly service: MateriaPrimaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MateriaPrima",
    action: "read",
    possession: "any",
  })
  async _materiaPrimasMeta(
    @graphql.Args() args: MateriaPrimaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MateriaPrima])
  @nestAccessControl.UseRoles({
    resource: "MateriaPrima",
    action: "read",
    possession: "any",
  })
  async materiaPrimas(
    @graphql.Args() args: MateriaPrimaFindManyArgs
  ): Promise<MateriaPrima[]> {
    return this.service.materiaPrimas(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MateriaPrima, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MateriaPrima",
    action: "read",
    possession: "own",
  })
  async materiaPrima(
    @graphql.Args() args: MateriaPrimaFindUniqueArgs
  ): Promise<MateriaPrima | null> {
    const result = await this.service.materiaPrima(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MateriaPrima)
  @nestAccessControl.UseRoles({
    resource: "MateriaPrima",
    action: "create",
    possession: "any",
  })
  async createMateriaPrima(
    @graphql.Args() args: CreateMateriaPrimaArgs
  ): Promise<MateriaPrima> {
    return await this.service.createMateriaPrima({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MateriaPrima)
  @nestAccessControl.UseRoles({
    resource: "MateriaPrima",
    action: "update",
    possession: "any",
  })
  async updateMateriaPrima(
    @graphql.Args() args: UpdateMateriaPrimaArgs
  ): Promise<MateriaPrima | null> {
    try {
      return await this.service.updateMateriaPrima({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MateriaPrima)
  @nestAccessControl.UseRoles({
    resource: "MateriaPrima",
    action: "delete",
    possession: "any",
  })
  async deleteMateriaPrima(
    @graphql.Args() args: DeleteMateriaPrimaArgs
  ): Promise<MateriaPrima | null> {
    try {
      return await this.service.deleteMateriaPrima(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Receta], { name: "recetas" })
  @nestAccessControl.UseRoles({
    resource: "Receta",
    action: "read",
    possession: "any",
  })
  async findRecetas(
    @graphql.Parent() parent: MateriaPrima,
    @graphql.Args() args: RecetaFindManyArgs
  ): Promise<Receta[]> {
    const results = await this.service.findRecetas(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
