"use client"

import { FaTrash } from "react-icons/fa";
import { useAnimatedSubtotal } from "../hooks/useAnimateHook"
import type { Product } from "./ShopCar"
import {ConfirModal} from "./ConfirModal"
import { useState } from "react"


interface ProductListProps {
  products: Product[]
  removeProduct: (id: number) => void
  onContinue: () => void
}

const ProductList = ({ products, removeProduct, onContinue }: ProductListProps) => {
  const { displaySubtotal, subtotalRef } = useAnimatedSubtotal({ products })
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)

  const handleRemove = (product: Product) => {
    setProductToDelete(product)
    setShowConfirmDelete(true)
  }
  const calculateSubtotal = (product: Product) => product.price * product.quantity

  const handleConfirm = () => {
    if (productToDelete) {
      removeProduct(productToDelete.id)
      setProductToDelete(null)
      setShowConfirmDelete(false)
    }
  }
  const handleCancel = () => {
    setProductToDelete(null)
    setShowConfirmDelete(false)
  }

  return (
    <>
    <div className="bg-gray-900 rounded-xl shadow-xl p-6">
      <h2 className="text-3xl font-bold mb-6 text-[#D40C63]">Carro de compras</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-500 text-lg">
              <th className="text-left py-4 px-2 text-blanco">Producto</th>
              <th className="text-center py-4 px-2 text-blanco">Cantidad</th>
              <th className="text-center py-4 px-2 text-blanco">Precio</th>

            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                id={`product-row-${product.id}`}
                className="border-b border-gray-500 transition-opacity duration-300"
              >
                <td className="py-4 px-2">
                  <div className="flex items-center">
                    <img
                      src="/assets/placeholder.jpg"
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <div className="font-medium text-blanco">{product.name}</div>
                      <div className="text-sm text-blanco/70">Color: {product.color}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2 text-center font-medium text-blanco">{product.quantity}</td>
                <td className="py-4 px-2 text-center font-medium text-blanco">${calculateSubtotal(product).toFixed(2)}</td>
                <td className="py-4 px-2 text-center">
                  <button
                    onClick={() => handleRemove(product)}
                    className=" flex justify-center items-center rounded-3xl p-[10px] bg-red-500  hover:bg-red-600  transition-colors ease-in-out duration-300"
                  >
                    <FaTrash className="w-5 h-5  " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-bold text-amarillo">
          Subtotal: $<span ref={subtotalRef} className="inline-block">{displaySubtotal.toFixed(2)}</span>
        </div>
        <div className="flex space-x-4">

          <button
            onClick={onContinue}
            className="px-6 py-2 text-blanco rounded-3xl bg-[#335BC6] hover:bg-[#335BC6]/60 transition-colors ease-in-out duration-300"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
          {showConfirmDelete && <ConfirModal onConfirm={handleConfirm} onCancel={handleCancel} isOpen={showConfirmDelete} tittle="Borrar" message="¿Estás seguro de que quieres borrar este producto?" />}

    </>
  )
}

export default ProductList