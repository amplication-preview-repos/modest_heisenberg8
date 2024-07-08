import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MateriaPrimaServiceBase } from "./base/materiaPrima.service.base";

@Injectable()
export class MateriaPrimaService extends MateriaPrimaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
