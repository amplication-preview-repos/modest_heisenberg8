import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MateriaPrimaList } from "./materiaPrima/MateriaPrimaList";
import { MateriaPrimaCreate } from "./materiaPrima/MateriaPrimaCreate";
import { MateriaPrimaEdit } from "./materiaPrima/MateriaPrimaEdit";
import { MateriaPrimaShow } from "./materiaPrima/MateriaPrimaShow";
import { ProductoList } from "./producto/ProductoList";
import { ProductoCreate } from "./producto/ProductoCreate";
import { ProductoEdit } from "./producto/ProductoEdit";
import { ProductoShow } from "./producto/ProductoShow";
import { CostoList } from "./costo/CostoList";
import { CostoCreate } from "./costo/CostoCreate";
import { CostoEdit } from "./costo/CostoEdit";
import { CostoShow } from "./costo/CostoShow";
import { VentaList } from "./venta/VentaList";
import { VentaCreate } from "./venta/VentaCreate";
import { VentaEdit } from "./venta/VentaEdit";
import { VentaShow } from "./venta/VentaShow";
import { RecetaList } from "./receta/RecetaList";
import { RecetaCreate } from "./receta/RecetaCreate";
import { RecetaEdit } from "./receta/RecetaEdit";
import { RecetaShow } from "./receta/RecetaShow";
import { UsuarioList } from "./usuario/UsuarioList";
import { UsuarioCreate } from "./usuario/UsuarioCreate";
import { UsuarioEdit } from "./usuario/UsuarioEdit";
import { UsuarioShow } from "./usuario/UsuarioShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Restaurant Resource Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MateriaPrima"
          list={MateriaPrimaList}
          edit={MateriaPrimaEdit}
          create={MateriaPrimaCreate}
          show={MateriaPrimaShow}
        />
        <Resource
          name="Producto"
          list={ProductoList}
          edit={ProductoEdit}
          create={ProductoCreate}
          show={ProductoShow}
        />
        <Resource
          name="Costo"
          list={CostoList}
          edit={CostoEdit}
          create={CostoCreate}
          show={CostoShow}
        />
        <Resource
          name="Venta"
          list={VentaList}
          edit={VentaEdit}
          create={VentaCreate}
          show={VentaShow}
        />
        <Resource
          name="Receta"
          list={RecetaList}
          edit={RecetaEdit}
          create={RecetaCreate}
          show={RecetaShow}
        />
        <Resource
          name="Usuario"
          list={UsuarioList}
          edit={UsuarioEdit}
          create={UsuarioCreate}
          show={UsuarioShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
