
import { FaTrash } from "react-icons/fa";
import { useAnimatedSubtotal } from "../hooks/useAnimateHook"
import {ConfirModal} from "./ConfirModal"
import { useState } from "react"
import type { Product } from "@/interfaces/interfaces";
import { CoustomButton } from "@/01-AdminUser/components/CoustomButton";



interface ProductListProps {
  products: Product[]
  onContinue: () => void
}

export const ProductList = ({ products, onContinue }: ProductListProps) => {

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
      // removeProduct(productToDelete.id)
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
    <div className=" rounded-xl  flex flex-col items-center gap-5 py-6 justify-center w-full">
      <h2 className="text-3xl font-bold  text-white">Carro de compras</h2>

      <div className=" w-[85%] ">
        <table className="flex flex-col gap-4 ">
          <thead className=" bg-gray-800 w-full  rounded-2xl shadow-md">
            <tr className="text-lg  grid grid-cols-8  justify-center items-center  w-full ">
              <th className="  text-blanco col-span-5">Producto</th>
              <th className=" text-center py-4 px-2 text-blanco">Cantidad</th>
              <th className=" text-center py-4 px-2 text-blanco">Precio</th>
              <th className=" text-center py-4 px-2 text-blanco"></th>
            </tr>
          </thead>
          <tbody className="w-full flex flex-col gap-4">
            {products.map((product) => (
              <tr
                key={product.id}
                id={`product-row-${product.id}`}
                className="bg-gray-900 transition-opacity shadow-md items-center rounded-2xl duration-300 grid grid-cols-8   w-full"
              >
                <td className=" py-3 px-2 col-span-5 place-self-start pl-6 ">
                  <div className="flex justify-center items-center">
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
                <td className=" py-4 px-2 text-center font-medium text-blanco">{product.quantity}</td>
                <td className=" py-4 px-2 text-center font-medium text-blanco">${calculateSubtotal(product).toFixed(2)}</td>
                <td className=" py-4 px-2 justify-self-center  text-center">
                  <button
                    onClick={() => handleRemove(product)}
                    className=" flex  rounded-2xl p-[10px]  hover:scale-105  transition-all ease-in-out duration-300"
                  >
                    <FaTrash className="w-6 h-full hover:text-[#d40c63cb]  text-[#d40c639d]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" flex justify-between  w-[84%] pb-5 ">
        <div className="text-xl font-bold text-amarillo">
          Subtotal:  $ <span ref={subtotalRef} className="inline-block">{displaySubtotal.toFixed(2)}</span>
        </div>
        <div className="self-end">
          <CoustomButton
            handleOnClick={onContinue}
            colorButton="#1c398e"
						hoverColor="#335BC6"
            tittleButton="Continuar"
          />
          
        </div>
      </div>
    </div>
          {showConfirmDelete && <ConfirModal onConfirm={handleConfirm} onCancel={handleCancel} isOpen={showConfirmDelete} tittle="Borrar" message="¿Estás seguro de que quieres borrar este producto?" />}

    </>
  )
}

export default ProductList