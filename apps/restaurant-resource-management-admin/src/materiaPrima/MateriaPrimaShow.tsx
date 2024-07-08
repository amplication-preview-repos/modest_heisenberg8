import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCTO_TITLE_FIELD } from "../producto/ProductoTitle";
import { MATERIAPRIMA_TITLE_FIELD } from "./MateriaPrimaTitle";

export const MateriaPrimaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="nombre" source="nombre" />
        <TextField label="descripcion" source="descripcion" />
        <TextField label="cantidad" source="cantidad" />
        <TextField label="unidad" source="unidad" />
        <TextField label="costoUnitario" source="costoUnitario" />
        <TextField label="stockMinimo" source="stockMinimo" />
        <ReferenceManyField
          reference="Receta"
          target="materiaPrimaId"
          label="Recetas"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="cantidadNecesaria" source="cantidadNecesaria" />
            <ReferenceField
              label="Producto"
              source="producto.id"
              reference="Producto"
            >
              <TextField source={PRODUCTO_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="MateriaPrima"
              source="materiaprima.id"
              reference="MateriaPrima"
            >
              <TextField source={MATERIAPRIMA_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
