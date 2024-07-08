import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CostoServiceBase } from "./base/costo.service.base";

@Injectable()
export class CostoService extends CostoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
