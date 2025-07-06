import Header from "../../components/head";
import { Table } from "../../components/Table";
import { type User } from "../../types/types";
import {usuarios} from '../../data/data.json'
import type { Columns } from "@/interfaces/interfaces";



export function AdminUser() {
  const data: User[] = usuarios;
  
  const columnas : Columns[] = [
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
      <div className="flex flex-col w-screen nunito-normal ">
        <Header />
        <div className="w-full ">
          <Table
            data={data}
            columnas={columnas}
            title="Gestión de usuarios"
          />
        </div>
      </div>
      
    </>
  );
}
