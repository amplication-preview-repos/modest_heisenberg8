import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CostoModuleBase } from "./base/costo.module.base";
import { CostoService } from "./costo.service";
import { CostoController } from "./costo.controller";
import { CostoResolver } from "./costo.resolver";

@Module({
  imports: [CostoModuleBase, forwardRef(() => AuthModule)],
  controllers: [CostoController],
  providers: [CostoService, CostoResolver],
  exports: [CostoService],
})
export class CostoModule {}
