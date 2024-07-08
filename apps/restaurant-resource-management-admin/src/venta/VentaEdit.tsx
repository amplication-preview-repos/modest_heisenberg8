import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductoTitle } from "../producto/ProductoTitle";

export const VentaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="fecha" source="fecha" />
        <NumberInput label="monto" source="monto" />
        <NumberInput label="cantidad" source="cantidad" />
        <ReferenceInput
          source="producto.id"
          reference="Producto"
          label="Producto"
        >
          <SelectInput optionText={ProductoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
