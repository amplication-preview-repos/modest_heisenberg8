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
import { MATERIAPRIMA_TITLE_FIELD } from "../materiaPrima/MateriaPrimaTitle";

export const RecetaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Recetas"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
