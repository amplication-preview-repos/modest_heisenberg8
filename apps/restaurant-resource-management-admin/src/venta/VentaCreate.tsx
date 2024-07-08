import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductoTitle } from "../producto/ProductoTitle";

export const VentaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
