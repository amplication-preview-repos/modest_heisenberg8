import { Usuario as TUsuario } from "../api/usuario/Usuario";

export const USUARIO_TITLE_FIELD = "nombre";

export const UsuarioTitle = (record: TUsuario): string => {
  return record.nombre?.toString() || String(record.id);
};
