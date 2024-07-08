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

import { RecetaTitle } from "../receta/RecetaTitle";

export const MateriaPrimaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="nombre" source="nombre" />
        <TextInput label="descripcion" multiline source="descripcion" />
        <NumberInput label="cantidad" source="cantidad" />
        <TextInput label="unidad" source="unidad" />
        <NumberInput label="costoUnitario" source="costoUnitario" />
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
