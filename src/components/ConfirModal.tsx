import { CoustomButton } from "@/01-AdminUser/components/CoustomButton"
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
    <div className=" fixed top-0 left-0 bottom-0 right-0 bg-[#000000be] flex justify-center items-center">
        <div className="bg-gray-900 rounded-2xl flex flex-col gap-6 shadow-xl p-8">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-xl font-bold">{tittle}</h1>
            <p className="text-lg  text-white"> {message}</p>
          </div>
            
            <div className="flex justify-between  gap-2">
              <CoustomButton
                handleOnClick={onConfirm}
                tittleButton={tittle?? ""}
                colorButton="#fb2c36"
                hoverColor="#fb2c36cb"
                
              />
              <CoustomButton
                handleOnClick={onCancel}
                tittleButton={"Cancelar"}
                colorButton="#335BC6"
							  hoverColor="#1c398e"
              />
              
            </div>
        </div>
    </div>
  )
}
