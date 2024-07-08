import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VentaServiceBase } from "./base/venta.service.base";

@Injectable()
export class VentaService extends VentaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
