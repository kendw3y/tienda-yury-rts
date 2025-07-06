import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";

interface CoustomButtonProps {
	hoverColor:string
    colorButton?:string
    tittleButton?:string
    iconButton?: IconType
    handleOnClick: () => void 
}

export const CoustomButton = ( { iconButton : Icon,handleOnClick,tittleButton,colorButton ,hoverColor} : CoustomButtonProps ) => {
	return (
		<motion.button
			layout
			whileHover={{
				scale: 1.08,
				backgroundColor: `${ hoverColor?? '#ffffff'}`
			}}
            whileTap={{
                scale:0.9
            }}
			transition={{
				duration: 0.18,
			}}
			style={{backgroundColor:`${colorButton?? '#ffffff'}`}}
			onClick={handleOnClick}
			className={` cursor-pointer flex rounded-3xl  py-2 pl-5 pr-6 gap-1 shadow-md `} 
		>
			{Icon&&<Icon className="w-5 h-full" />}
			<span className="text-[16px] h-full font-bold">{tittleButton??""}</span>
		</motion.button>
	);
};
