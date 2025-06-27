import Header from "./head";
import { Table } from "./Table";
import { type User } from "../types/types";
import usuarios from "../data/usuarios.json";


export function AdminUser() {
  const data: User[] = usuarios;
  const columnas = [
    {
      header:"Nombre y apellidos",
      accessorKey:"nombre_apellidos",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Teléfono",
      accessorKey: "telefono",
    },
    {
      header: "Entidad",
      accessorKey: "Entidad",
    },
    {
      header: "Dirección",
      accessorKey: "direccion",
    },
  ];
  

  return (
    <>
      <div className="flex flex-col  nunito-normal ">
        <Header />
        <div className="p-8">
          <Table
            data={data}
            columnas={columnas}
            title="Usuarios"
          />
        </div>
      </div>
      
    </>
  );
}
