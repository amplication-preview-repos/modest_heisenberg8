export type Usuario = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nombre: string | null;
  email: string | null;
  password: string | null;
  rol?: "Option1" | null;
  roles?: "Option1" | null;
  lastLoginAt: Date | null;
};
