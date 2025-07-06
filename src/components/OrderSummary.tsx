import type { Product } from "@/interfaces/interfaces"


interface OrderSummaryProps {
  products: Product[]
  totals: {
    delivery: string
    total: string
  }
  onBack: () => void
  onContinue: () => void
}

export const OrderSummary = ({ products, totals, onBack, onContinue }: OrderSummaryProps) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold mb-6 text-[#D40C63] ">Resumen del Pedido</h2>

      <div className="overflow-x-auto w-[90%]">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-gray-500 text-lg">
              <th className="text-left py-4 px-2 text-blanco">Producto</th>
              <th className="text-right py-4 px-2 text-blanco">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-500">
                <td className="py-4 px-2">
                  <div className="flex items-center">
                    <img
                      src="./assets/placeholder.jpg"
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded mr-4"
                    />
                    <div>
                      <div className="font-medium text-blanco">{product.name}</div>
                      <div className="text-sm text-blanco/70">Color: {product.color}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2 text-right font-medium text-blanco">
                  ${(product.price * product.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className="border-b border-gray-500">
              <td  className="py-4 px-2  font-medium text-blanco text-xl">
                Envío:
              </td>
              <td className="py-4 px-2 text-right font-medium text-blanco">${totals.delivery}</td>
            </tr>
            <tr>
              <td  className="py-4 px-2  font-bold text-amarillo text-2xl">
                Total:
              </td>
              <td className="py-4 px-2 text-right font-bold text-amarillo text-lg">${totals.total}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-8 flex justify-end space-x-4">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-[#fccf08d5]  text-blanco hover:bg-[#fccf08d5]/60 rounded-3xl text-blanco  transition-colors ease-in-out duration-300"
        >
          Atrás
        </button>
        <button
          onClick={onContinue}
          className="px-6 py-2  text-blanco rounded-3xl bg-[#335BC6] hover:bg-[#335BC6]/60 transition-colors ease-in-out duration-300"
        >
          Continuar al Pago
        </button>
      </div>
      </div>

      
    </div>
  )
}

export default OrderSummary
