import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductoModuleBase } from "./base/producto.module.base";
import { ProductoService } from "./producto.service";
import { ProductoController } from "./producto.controller";
import { ProductoResolver } from "./producto.resolver";

@Module({
  imports: [ProductoModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductoController],
  providers: [ProductoService, ProductoResolver],
  exports: [ProductoService],
})
export class ProductoModule {}
