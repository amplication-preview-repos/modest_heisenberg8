import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MateriaPrimaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MateriaPrimas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="nombre" source="nombre" />
        <TextField label="descripcion" source="descripcion" />
        <TextField label="cantidad" source="cantidad" />
        <TextField label="unidad" source="unidad" />
        <TextField label="costoUnitario" source="costoUnitario" />
      </Datagrid>
    </List>
  );
};
