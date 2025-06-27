"use client";

import React, { useState } from "react";
import { provinciasYMunicipios } from "../data/provinciasymunicipios";
import { IoIosArrowDown } from "react-icons/io";

// Datos de provincias y municipios (ejemplo para República Dominicana)

// Tipo para las opciones del select
interface SelectOption {
  value: string;
  label: string;
}

interface SelectInterconectadosProps {
  onChange: (provincia: string, municipio: string) => void;
}

const SelectInterconectados: React.FC<SelectInterconectadosProps> = ({
  onChange,
}) => {
  const [provinciaSeleccionada, setProvinciaSeleccionada] =
    useState<string>("");
  const [municipioSeleccionado, setMunicipioSeleccionado] =
    useState<string>("");

  // Convertimos las provincias a formato para el select
  const provincias: SelectOption[] = Object.keys(provinciasYMunicipios).map(
    (provincia) => ({
      value: provincia,
      label: provincia,
    })
  );

  // Obtener municipios basados en la provincia seleccionada
  const municipios: SelectOption[] = provinciaSeleccionada
    ? provinciasYMunicipios[provinciaSeleccionada].map((municipio) => ({
        value: municipio,
        label: municipio,
      }))
    : [];

  const handleProvinciaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provincia = e.target.value;
    setProvinciaSeleccionada(provincia);
    setMunicipioSeleccionado("");
    onChange(provincia, "");
  };

  const handleMunicipioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const municipio = e.target.value;
    setMunicipioSeleccionado(municipio);
    onChange(provinciaSeleccionada, municipio);
  };

  return (
    <>
      <div className="col-span-1">
        <label className="block text-sm font-medium text-blanco mb-1">
          Provincia
        </label>
        <div className="w-full relative flex">
          <select
            value={provinciaSeleccionada}
            onChange={handleProvinciaChange}
            className="w-full px-3 py-2 appearance-none peer rounded-md bg-gray-800 text-blanco focus:outline-none focus:bg-gray-700 transition-colors ease-in-out duration-500"
            required
          >
            <option value="">Selecciona una provincia</option>
            {provincias.map((provincia) => (
              <option key={provincia.value} value={provincia.value}>
                {provincia.label}
              </option>
            ))}
          </select>
          <IoIosArrowDown className="text-white absolute top-[30%] peer-focus:rotate-180 transition-all ease-in-out duration-500 right-2  "></IoIosArrowDown>
        </div>
      </div>
      <div className="col-span-1">
        <label className="block text-sm font-medium text-blanco mb-1">
          Municipio
        </label>
        <div className="flex w-auto">
          <div className="flex relative w-full">
            <select
              value={municipioSeleccionado}
              onChange={handleMunicipioChange}
              disabled={!provinciaSeleccionada}
              className="w-full px-3 py-2 peer rounded-md appearance-none bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500 disabled:opacity-50"
              required
            >
              <option value="">Selecciona un municipio</option>
              {municipios.map((municipio) => (
                <option key={municipio.value} value={municipio.value}>
                  {municipio.label}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="text-white absolute top-[30%] peer-focus:rotate-180 transition-all ease-in-out duration-500 right-2  "></IoIosArrowDown>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectInterconectados;
