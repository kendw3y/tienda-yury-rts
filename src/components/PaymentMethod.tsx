"use client"
import { SuccessfulAnimate } from "./SuccessfulAnimate"
import {  QrCode } from "lucide-react"
import { useState } from "react"

interface PaymentMethodProps {
  onBack: () => void
  onSelectPayment: (method: string) => void
  selectedPayment: string
  total: string
}

const PaymentMethod = ({ onBack, onSelectPayment, selectedPayment, total }: PaymentMethodProps) => {
  const handlePaymentSelect = (method: string) => {
    onSelectPayment(method)
  }
  const [showConfirm,setShowConfirm]=useState(false)

  return (
    <div className="bg-gray-900 rounded-lg shadow p-6 ">
      <h2 className="text-2xl font-bold mb-6 text-[#D40C63]">Método de Pago</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blanco">Selecciona un método de pago</h3>

          <div className="space-y-4">
            <div
              className={`shadow-lg ${selectedPayment=="transfermovil"?"bg-[#1e293944] border border-gray-800":"border border-transparent bg-gray-800"}   hover:bg-[#1e293944]  rounded-lg p-4 cursor-pointer transition-all duration-300 "
                }`}
              onClick={() => handlePaymentSelect("transfermovil")}
            >
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300
                    }`}
                >
                  <img src="src\assets\cu.etecsa.cubacel.tr.tm-v130 (1).png" alt="transfermovil" className="w-12 " />
                </div>
                <div>
                  <div className="font-bold text-xl  text-blanco">Transfermóvil</div>
                  <div className="text-sm text-blanco/70">Paga escaneando el código QR</div>
                </div>
              </div>
            </div>

            <div
              className={`${selectedPayment=="enzona"?"bg-[#1e293944] border border-gray-800":"border border-transparent bg-gray-800"}  hover:bg-[#1e293944] rounded-lg p-4 cursor-pointer transition-all duration-300 ${selectedPayment === "transfer" ? "border-rosa bg-rosa/10" : "border-rosa/50 hover:border-rosa/70"
                }`}
              onClick={() => handlePaymentSelect("enzona")}
            >
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300 ${selectedPayment === "transfer" ? "bg-rosa/30" : "bg-background"
                    }`}
                >
                  <img src="src\assets\cu.xetid.apk.enzona-v20002 (1).png" alt="Logo de enzona" className="w-12 " />
                </div>
                <div>
                  <div className="font-bold text-xl">ENZONA</div>
                  <div className="text-sm text-blanco/70">Escanea el código QR para pagar</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1e293944] p-6 rounded-lg ">
          <h3 className="text-lg font-semibold mb-4 text-blanco">Resumen del Pago</h3>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span className="text-blanco">Total a Pagar</span>
            <span className="text-amarillo">${total}</span>
          </div>

          {selectedPayment && (
            <div className={`flex flex-col items-center animate-scaleIn`}>
              <div className="bg-blanco p-4 rounded-lg mb-4">
                <div className="w-48 h-48 flex items-center justify-center">
                  <QrCode className="w-32 h-32" />
                </div>
              </div>
              <p className="text-sm text-center text-blanco/80">
                {selectedPayment === "transfermovil"
                  ? "Escanea este código QR con tu aplicación bancaria para pagar con tarjeta Transfermovil"
                  : "Escanea este código QR para realizar la transferencia bancaria Enzona"}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <button
          onClick={onBack}
          className="px-6 py-2  bg-[#fccf08d5] hover:bg-[#fccf08d5]/60 rounded-3xl text-blanco  transition-colors ease-in-out duration-300"
        >
          Atrás
        </button>
        <button onClick={()=>{
          if(selectedPayment==="") console.log("selecione un metodo de pago")
            else
              setShowConfirm(true)
        }} className="px-6 py-2 text-blanco rounded-3xl   bg-[#335BC6] hover:bg-[#335BC6]/60 transition-colors ease-in-out duration-300"
        >
          Finalizar Compra
        </button>
      </div>
        {showConfirm&&<SuccessfulAnimate setShow={()=>setShowConfirm(false)}/>}
    </div>
  )
}

export default PaymentMethod
