/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { RecetaCreateNestedManyWithoutMateriaPrimasInput } from "./RecetaCreateNestedManyWithoutMateriaPrimasInput";
import { Type } from "class-transformer";

@InputType()
class MateriaPrimaCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nombre?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  descripcion?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  cantidad?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  unidad?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  costoUnitario?: number | null;

  @ApiProperty({
    required: false,
    type: () => RecetaCreateNestedManyWithoutMateriaPrimasInput,
  })
  @ValidateNested()
  @Type(() => RecetaCreateNestedManyWithoutMateriaPrimasInput)
  @IsOptional()
  @Field(() => RecetaCreateNestedManyWithoutMateriaPrimasInput, {
    nullable: true,
  })
  recetas?: RecetaCreateNestedManyWithoutMateriaPrimasInput;
}

export { MateriaPrimaCreateInput as MateriaPrimaCreateInput };
