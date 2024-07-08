import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MateriaPrimaModuleBase } from "./base/materiaPrima.module.base";
import { MateriaPrimaService } from "./materiaPrima.service";
import { MateriaPrimaController } from "./materiaPrima.controller";
import { MateriaPrimaResolver } from "./materiaPrima.resolver";

@Module({
  imports: [MateriaPrimaModuleBase, forwardRef(() => AuthModule)],
  controllers: [MateriaPrimaController],
  providers: [MateriaPrimaService, MateriaPrimaResolver],
  exports: [MateriaPrimaService],
})
export class MateriaPrimaModule {}
