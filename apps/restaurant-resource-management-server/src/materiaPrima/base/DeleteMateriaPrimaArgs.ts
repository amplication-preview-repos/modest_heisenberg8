/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MateriaPrimaWhereUniqueInput } from "./MateriaPrimaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteMateriaPrimaArgs {
  @ApiProperty({
    required: true,
    type: () => MateriaPrimaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MateriaPrimaWhereUniqueInput)
  @Field(() => MateriaPrimaWhereUniqueInput, { nullable: false })
  where!: MateriaPrimaWhereUniqueInput;
}

export { DeleteMateriaPrimaArgs as DeleteMateriaPrimaArgs };
