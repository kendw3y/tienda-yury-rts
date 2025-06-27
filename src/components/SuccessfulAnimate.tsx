
import Lottie from "lottie-react";
import animation from "../../public/Animation - 1751001094827.json";
type Props = {
    setShow:()=>void
};

export function SuccessfulAnimate({setShow}: Props) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0  flex flex-col justify-center items-center z-50 bg-[#111420] ">
      <div className="flex flex-col items-center gap-7">
          <Lottie animationData={animation} className="w-64 h-64"></Lottie>
          <div className="text-center">
            <h1 className="text-4xl font-black">Pedido Confirmado</h1>
            <p className="text-2xl">
              Gracias por su compra. Te contactaremos pronto para confirmar los
              detalles.
            </p>
          </div>
          <div className="bg-gray-100 text-center flex flex-col gap-5 p-4 text-2xl font-bold rounded-2xl text-black w-full">
            <span className="font-black text-3xl">Información de contacto</span>
            <div className="flex flex-col ">
                <span>Email: hola@gmail.com</span>
                <span>Teléfono: +5358242569</span>
            </div>
          </div>
          <div className="flex">
            <button onClick={setShow} className="bg-[#335BC6] hover:bg-[#335BC6]/60 transition-all ease-in-out duration-300 px-16 py-3 rounded-2xl ">
                VOLVER AL INICIO
            </button>
          </div>
      </div>
    </div>
  );
}
