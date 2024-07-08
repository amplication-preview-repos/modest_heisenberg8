import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PRODUCTO_TITLE_FIELD } from "../producto/ProductoTitle";
import { MATERIAPRIMA_TITLE_FIELD } from "../materiaPrima/MateriaPrimaTitle";

export const RecetaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
