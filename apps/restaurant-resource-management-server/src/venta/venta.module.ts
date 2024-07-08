import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VentaModuleBase } from "./base/venta.module.base";
import { VentaService } from "./venta.service";
import { VentaController } from "./venta.controller";
import { VentaResolver } from "./venta.resolver";

@Module({
  imports: [VentaModuleBase, forwardRef(() => AuthModule)],
  controllers: [VentaController],
  providers: [VentaService, VentaResolver],
  exports: [VentaService],
})
export class VentaModule {}
