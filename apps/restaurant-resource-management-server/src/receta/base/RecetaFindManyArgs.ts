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
import { RecetaWhereInput } from "./RecetaWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RecetaOrderByInput } from "./RecetaOrderByInput";

@ArgsType()
class RecetaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RecetaWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RecetaWhereInput, { nullable: true })
  @Type(() => RecetaWhereInput)
  where?: RecetaWhereInput;

  @ApiProperty({
    required: false,
    type: [RecetaOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RecetaOrderByInput], { nullable: true })
  @Type(() => RecetaOrderByInput)
  orderBy?: Array<RecetaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RecetaFindManyArgs as RecetaFindManyArgs };
