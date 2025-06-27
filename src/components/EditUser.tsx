
import { type User } from "../types/types";

import { schema } from "./AddUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";



interface EditUserProps {
  isVisible: () => void;
  user: User;
}
//endpoint de prueba

  
  

export function EditUser({ isVisible, user }: EditUserProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = handleSubmit((data) => {
    console.log(data);
    
    console.log("Succefull");
    isVisible();
  });
  return (
    <div className="flex flex-col items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50  ">
      <div className="bg-gray-900 rounded-xl shadow-xl flex flex-col gap-6 px-8 py-6 w-full max-w-3xl ">
        <h1 className="text-3xl font-bold text-center">Registrar</h1>
        <form action="" className="flex flex-col gap-4" onSubmit={onsubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Nombre y Apellidos
              </label>
              <input
                defaultValue={user.nombre}
                type="tel"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
                {...register("nombre_apellidos")}
              />
              <p className="text-sm text-red-400">
                {errors.nombre_apellidos?.message}
              </p>
            </div>
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Teléfono
              </label>
              <input
                defaultValue={user.telefono}
                type="tel"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
                {...register("telefono")}
              />
              <p className="text-sm text-red-400">{errors.telefono?.message}</p>
            </div>
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Correo electrónico
              </label>
              <input
                defaultValue={user.email}
                type="text"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
                {...register("correo")}
              />
              <p className="text-sm text-red-400">{errors.correo?.message}</p>
            </div>
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Entidad
              </label>
              <input
                defaultValue={user.Entidad}
                type="tel"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
                {...register("entidad")}
              />
              <p className="text-sm text-red-400">{errors.entidad?.message}</p>
            </div>
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
                {...register("contrasena")}
              />
              <p className="text-sm text-red-400">
                {errors.contrasena?.message}
              </p>
            </div>
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Dirección
              </label>
              <input
                defaultValue={user.direccion}
                type="tel"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
                {...register("direccion")}
              />
              <p className="text-sm text-red-400">
                {errors.direccion?.message}
              </p>
            </div>
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
                {...register("conf_contrasena")}
              />
              <p className="text-sm text-red-400">
                {errors.conf_contrasena?.message}
              </p>
            </div>
          </div>
          <div className="flex justify-end center gap-6  items-end">
            <button
              type="submit"
              className="bg-[#335BC6] hover:bg-[#335BC6]/50 transition-colors duration-300 ease-in-out rounded-3xl px-8 py-2"
            >
              Aceptar
            </button>
            <button
              className="bg-[#335BC6] hover:bg-[#335BC6]/50 transition-colors duration-300 ease-in-out rounded-3xl px-8 py-2 "
              onClick={() => isVisible()}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
