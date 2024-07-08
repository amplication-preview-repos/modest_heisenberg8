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

import { PRODUCTO_TITLE_FIELD } from "./ProductoTitle";
import { MATERIAPRIMA_TITLE_FIELD } from "../materiaPrima/MateriaPrimaTitle";

export const ProductoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="nombre" source="nombre" />
        <TextField label="descripcion" source="descripcion" />
        <TextField label="precioVenta" source="precioVenta" />
        <ReferenceManyField
          reference="Costo"
          target="productoId"
          label="Costos"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="monto" source="monto" />
            <TextField label="fecha" source="fecha" />
            <TextField label="tipoDeCosto" source="tipoDeCosto" />
            <ReferenceField
              label="Producto"
              source="producto.id"
              reference="Producto"
            >
              <TextField source={PRODUCTO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Venta"
          target="productoId"
          label="Ventas"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="fecha" source="fecha" />
            <TextField label="monto" source="monto" />
            <TextField label="cantidad" source="cantidad" />
            <ReferenceField
              label="Producto"
              source="producto.id"
              reference="Producto"
            >
              <TextField source={PRODUCTO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Receta"
          target="productoId"
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
