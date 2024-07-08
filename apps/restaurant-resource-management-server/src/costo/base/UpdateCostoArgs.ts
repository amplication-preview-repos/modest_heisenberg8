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
import { CostoWhereUniqueInput } from "./CostoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CostoUpdateInput } from "./CostoUpdateInput";

@ArgsType()
class UpdateCostoArgs {
  @ApiProperty({
    required: true,
    type: () => CostoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CostoWhereUniqueInput)
  @Field(() => CostoWhereUniqueInput, { nullable: false })
  where!: CostoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CostoUpdateInput,
  })
  @ValidateNested()
  @Type(() => CostoUpdateInput)
  @Field(() => CostoUpdateInput, { nullable: false })
  data!: CostoUpdateInput;
}

export { UpdateCostoArgs as UpdateCostoArgs };
