/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumCostoTipoDeCosto } from "./EnumCostoTipoDeCosto";
import { Producto } from "../../producto/base/Producto";

@ObjectType()
class Costo {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

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
  monto!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  fecha!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumCostoTipoDeCosto,
  })
  @IsEnum(EnumCostoTipoDeCosto)
  @IsOptional()
  @Field(() => EnumCostoTipoDeCosto, {
    nullable: true,
  })
  tipoDeCosto?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => Producto,
  })
  @ValidateNested()
  @Type(() => Producto)
  @IsOptional()
  producto?: Producto | null;
}

export { Costo as Costo };
