import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const UsuarioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="nombre" source="nombre" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <SelectInput
          source="rol"
          label="rol"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="roles"
          label="roles"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="lastLoginAt" source="lastLoginAt" />
      </SimpleForm>
    </Edit>
  );
};
