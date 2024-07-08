import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductoTitle } from "../producto/ProductoTitle";
import { MateriaPrimaTitle } from "../materiaPrima/MateriaPrimaTitle";

export const RecetaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="cantidadNecesaria" source="cantidadNecesaria" />
        <ReferenceInput
          source="producto.id"
          reference="Producto"
          label="Producto"
        >
          <SelectInput optionText={ProductoTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="materiaPrima.id"
          reference="MateriaPrima"
          label="MateriaPrima"
        >
          <SelectInput optionText={MateriaPrimaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
