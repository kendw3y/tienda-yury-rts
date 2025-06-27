import { useEffect, useState } from "react"

interface ConfirModalProps {
  onConfirm: () => void,
  onCancel: () => void,
  isOpen: boolean,
  message: string,
  tittle?:string
}
export  function ConfirModal( {onConfirm, onCancel, isOpen, message,tittle}:ConfirModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(isOpen)
  }, [isOpen])
  console.log(isVisible)
  if(!isVisible) return null
  return (
    <div className=" fixed top-0 left-0 bottom-0 right-0 bg-black/50 flex justify-center items-center">
        <div className="bg-gray-900 rounded-xl flex flex-col gap-6 shadow-xl p-6">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-xl font-bold">{tittle}</h1>
            <p className="text-lg  text-white"> {message}</p>
          </div>
            
            <div className="flex justify-between  gap-2">
              <button onClick={onConfirm} className="px-6 py-2 text-blanco rounded-3xl bg-red-500 hover:bg-red-500/60 transition-colors ease-in-out duration-300">
                  {tittle}
              </button>
              <button onClick={onCancel} className="px-6 py-2 text-blanco rounded-3xl bg-[#335BC6] hover:bg-[#335BC6]/60 transition-colors ease-in-out duration-300">
                  Cancelar
              </button>
            </div>
        </div>
    </div>
  )
}
