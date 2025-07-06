import { HiSearch } from "react-icons/hi"; 
import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineAdd, MdEdit } from "react-icons/md";
import { AddUser, ConfirModal, EditUser } from ".";
import type { User } from "@/types/types";
import { motion,useAnimationControls } from "framer-motion";
import { CoustomButton } from "./CoustomButton";

interface ActionButtonsProps {
	filters: string;
	setFilters: (value: string) => void;
	rowSelcted: User[];
}
export const ActionButtons = ({ filters, setFilters, rowSelcted }: ActionButtonsProps) => {
	const [showadduser, setShowAddUser] = useState(false);
	const [showedituser, setShowEditUser] = useState(false);
	const [showConfirmDelete, setShowConfirmDelete] = useState(false);

	const controls = useAnimationControls()

	const handleHover = () => {
		controls.start("hover")
	}

	return (
		<div className="flex  justify-between items-center">
			<div onMouseEnter={handleHover} className="flex items-center relative ">
				<motion.button 
				variants={{
					hover: {color:'#62748e'}
				}}
				animate={controls}
				className="absolute h-[40px] w-[40px] right-1 top-0 text-slate-700  px-2 flex items-center rounded">
					<HiSearch className="w-full h-full  " />
				</motion.button>
				<motion.input
					type="text"
					placeholder="Buscar..."
					className="pr-11 h-10 pl-4 py-2 bg-transparent placeholder:text-gray-300 text-gray-300 text-md border-2 border-slate-700 rounded-3xl transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-500 shadow-md focus:shadow-md "
					value={filters}
					onChange={e => setFilters(e.target.value)}
				/>
			</div>
			<div className="flex  items-center gap-4">
				<CoustomButton
					tittleButton="Editar" 
					iconButton={MdEdit}
					handleOnClick={() => setShowEditUser(!showedituser)}
					colorButton="#fccf0831"
					hoverColor="#fccf08cb"
				/>
				<CoustomButton
					tittleButton="Agregar" 
					iconButton={MdOutlineAdd}
					handleOnClick={() => setShowAddUser(!showadduser)}
					colorButton="#335ac673"
					hoverColor="#335ac6cb"
				/>
				<CoustomButton
					tittleButton="Eliminar" 
					iconButton={IoMdTrash}
					handleOnClick={() => setShowConfirmDelete(!showConfirmDelete)}
					colorButton="#d40c636e"
					hoverColor="#d40c63cb"
				/>
			</div>

			{showadduser && <AddUser isVisible={() => setShowAddUser(!showadduser)} />}
			{showedituser && (
				<EditUser isVisible={() => setShowEditUser(!showedituser)} user={rowSelcted[0]} />
			)}
			{showConfirmDelete && (
				<ConfirModal
					isOpen={showConfirmDelete}
					onCancel={() => setShowConfirmDelete(false)}
					message="¿Desea eliminar este usuario?"
					tittle="Eliminar"
					onConfirm={() => {}}
				/>
			)}
		</div>
	);
};
