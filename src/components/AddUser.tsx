import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface AddUserProps {
  isVisible: () => void;
}

export const schema = yup.object({
  nombre_apellidos:yup.string().required("Este campo es requerido"),
  telefono:yup.string().required("Este campo es requerido"),
  correo:yup.string().email("El campo debe seguir el patron abc@abc.abc").required("Este campo es requerido"),
  entidad:yup.string().required("Este campo es requerido"),
  contrasena:yup.string().required("Este campo es requerido"),
  direccion:yup.string().required("Este campo es requerido"),
  conf_contrasena:yup.string().oneOf([yup.ref("contrasena")],"Las contraseñas deben coincidir").required("Este campo es requerido")
})

export function AddUser({ isVisible }: AddUserProps) {
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onsubmit=handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className="flex flex-col items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50  ">
      <div className="bg-gray-900 rounded-xl shadow-xl flex flex-col gap-6 px-8 py-6 w-full max-w-3xl ">
        <h1 className="text-3xl font-bold text-center">Registrar</h1>
        <form action="" className="flex flex-col gap-4"  onSubmit={onsubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Nombre y Apellidos
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
                {...register("nombre_apellidos")}
              />
              <p className="text-sm text-red-400">{errors.nombre_apellidos?.message}</p>
            </div>
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Teléfono
              </label>
              <input
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
              <p className="text-sm text-red-400">{errors.contrasena?.message}</p>
            </div>
            <div>
              <label className="block  font-medium text-blanco mb-1">
                Dirección
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
                {...register("direccion")}
              />
              <p className="text-sm text-red-400">{errors.direccion?.message}</p>
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
              <p className="text-sm text-red-400">{errors.conf_contrasena?.message}</p>
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
