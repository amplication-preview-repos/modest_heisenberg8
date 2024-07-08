import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UsuarioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="nombre" source="nombre" />
        <TextField label="email" source="email" />
        <TextField label="password" source="password" />
        <TextField label="rol" source="rol" />
        <TextField label="roles" source="roles" />
        <TextField label="lastLoginAt" source="lastLoginAt" />
      </SimpleShowLayout>
    </Show>
  );
};
