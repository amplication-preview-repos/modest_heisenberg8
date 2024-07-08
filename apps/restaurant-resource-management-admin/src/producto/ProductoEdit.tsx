import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CostoTitle } from "../costo/CostoTitle";
import { VentaTitle } from "../venta/VentaTitle";
import { RecetaTitle } from "../receta/RecetaTitle";

export const ProductoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="nombre" source="nombre" />
        <TextInput label="descripcion" multiline source="descripcion" />
        <NumberInput label="precioVenta" source="precioVenta" />
        <ReferenceArrayInput
          source="costos"
          reference="Costo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CostoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ventas"
          reference="Venta"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VentaTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="recetas"
          reference="Receta"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecetaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
