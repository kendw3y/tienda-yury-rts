"use client"

import type React from "react"
import type { DeliveryInfo } from "./ShopCar"
import SelectInterconectados from "./SelectInterconectados"

interface DeliveryFormProps {
  deliveryInfo: DeliveryInfo
  onChange: (info: DeliveryInfo) => void
  onBack: () => void
  onContinue: () => void
}

const DeliveryForm = ({ deliveryInfo, onChange, onBack, onContinue }: DeliveryFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onChange({
      ...deliveryInfo,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onContinue()
  }

  return (
    <div className="bg-gray-900 rounded-xl shadow-xl p-6  ">
      <h2 className="text-2xl font-bold mb-6 text-[#D40C63]">Información de Entrega</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-blanco mb-1">Nombre Completo</label>
            <input 
              type="text"
              name="fullName"
              value={deliveryInfo.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2  rounded-md bg-gray-800 text-blanco focus:outline-none focus:bg-gray-700 transition-colors ease-in-out duration-500 "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blanco mb-1">Teléfono</label>
            <input 
              type="tel"
              name="phone"
              value={deliveryInfo.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blanco mb-1">Email</label>
            <input 
              type="email"
              name="email"
              value={deliveryInfo.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800  text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blanco mb-1">Dirección</label>
            <input 
              type="text"
              name="address"
              value={deliveryInfo.address}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-blanco focus:outline-none  focus:bg-gray-700 transition-colors ease-in-out duration-500"
              required
            />
          </div>
          <SelectInterconectados onChange={()=>{}} />
          
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 bg-[#fccf08d5] rounded-3xl text-blanco hover:bg-[#fccf08d5]/60 transition-colors ease-in-out duration-300"
          >
            Atrás
          </button>
          <button type="submit" className="px-6 py-2 text-blanco rounded-3xl bg-[#335BC6] hover:bg-[#335BC6]/60 transition-colors">
            Continuar
          </button>
        </div>
      </form>
    </div>
  )
}

export default DeliveryForm
