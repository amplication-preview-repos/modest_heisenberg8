import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCTO_TITLE_FIELD } from "../producto/ProductoTitle";

export const CostoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Costos"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
