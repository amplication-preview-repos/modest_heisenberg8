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
import { Producto } from "./Producto";
import { ProductoCountArgs } from "./ProductoCountArgs";
import { ProductoFindManyArgs } from "./ProductoFindManyArgs";
import { ProductoFindUniqueArgs } from "./ProductoFindUniqueArgs";
import { CreateProductoArgs } from "./CreateProductoArgs";
import { UpdateProductoArgs } from "./UpdateProductoArgs";
import { DeleteProductoArgs } from "./DeleteProductoArgs";
import { CostoFindManyArgs } from "../../costo/base/CostoFindManyArgs";
import { Costo } from "../../costo/base/Costo";
import { VentaFindManyArgs } from "../../venta/base/VentaFindManyArgs";
import { Venta } from "../../venta/base/Venta";
import { RecetaFindManyArgs } from "../../receta/base/RecetaFindManyArgs";
import { Receta } from "../../receta/base/Receta";
import { ProductoService } from "../producto.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Producto)
export class ProductoResolverBase {
  constructor(
    protected readonly service: ProductoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "read",
    possession: "any",
  })
  async _productosMeta(
    @graphql.Args() args: ProductoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Producto])
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "read",
    possession: "any",
  })
  async productos(
    @graphql.Args() args: ProductoFindManyArgs
  ): Promise<Producto[]> {
    return this.service.productos(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Producto, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "read",
    possession: "own",
  })
  async producto(
    @graphql.Args() args: ProductoFindUniqueArgs
  ): Promise<Producto | null> {
    const result = await this.service.producto(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Producto)
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "create",
    possession: "any",
  })
  async createProducto(
    @graphql.Args() args: CreateProductoArgs
  ): Promise<Producto> {
    return await this.service.createProducto({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Producto)
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "update",
    possession: "any",
  })
  async updateProducto(
    @graphql.Args() args: UpdateProductoArgs
  ): Promise<Producto | null> {
    try {
      return await this.service.updateProducto({
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

  @graphql.Mutation(() => Producto)
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "delete",
    possession: "any",
  })
  async deleteProducto(
    @graphql.Args() args: DeleteProductoArgs
  ): Promise<Producto | null> {
    try {
      return await this.service.deleteProducto(args);
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
  @graphql.ResolveField(() => [Costo], { name: "costos" })
  @nestAccessControl.UseRoles({
    resource: "Costo",
    action: "read",
    possession: "any",
  })
  async findCostos(
    @graphql.Parent() parent: Producto,
    @graphql.Args() args: CostoFindManyArgs
  ): Promise<Costo[]> {
    const results = await this.service.findCostos(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Venta], { name: "ventas" })
  @nestAccessControl.UseRoles({
    resource: "Venta",
    action: "read",
    possession: "any",
  })
  async findVentas(
    @graphql.Parent() parent: Producto,
    @graphql.Args() args: VentaFindManyArgs
  ): Promise<Venta[]> {
    const results = await this.service.findVentas(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Receta], { name: "recetas" })
  @nestAccessControl.UseRoles({
    resource: "Receta",
    action: "read",
    possession: "any",
  })
  async findRecetas(
    @graphql.Parent() parent: Producto,
    @graphql.Args() args: RecetaFindManyArgs
  ): Promise<Receta[]> {
    const results = await this.service.findRecetas(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
