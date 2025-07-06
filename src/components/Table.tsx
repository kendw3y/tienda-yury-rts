
import {
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
	MdKeyboardArrowRight,
	MdKeyboardArrowLeft,
} from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";
import { flexRender, type ColumnDef } from "@tanstack/react-table";
import { type User } from "../types/types";
import type { Columns } from "@/interfaces/interfaces";
import { useCoustomTable } from "@/hooks/useCoustomTable";
import { ActionButtons } from "@/01-AdminUser/components/ActionButtons";
import { useState } from "react";

interface TableProps {
	data: User[];
	columnas: Columns[];
	title?: string;
}

export function Table({ data, columnas, title }: TableProps) {
	const columns: ColumnDef<User>[] = [
		{
			id: "checkbox",
			header: ({ table }) => (
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						checked={table.getIsAllRowsSelected()}
						onChange={table.getToggleAllRowsSelectedHandler()}
						className="form-checkbox h-4 w-4 text-blue-600 rounded"
					/>
				</label>
			),
			cell: ({ row }) => (
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						checked={row.getIsSelected()}
						disabled={!row.getCanSelect()}
						onChange={row.getToggleSelectedHandler()}
						className="form-checkbox h-4 w-4 text-blue-600 rounded"
					/>
				</label>
			),
		},
		...columnas,
	];
	const { table, filters, setFilters } = useCoustomTable({ data, columns });
	
	console.log( table.getSelectedRowModel().flatRows.map(row => row.original) )
	return (
		<div className=" flex flex-col gap-8 w-full  px-16 pt-8 ">
			<h1 className="text-4xl font-bold  text-center  ">{title ?? "Table"}</h1>

			< ActionButtons 
				filters={filters}
				setFilters={setFilters}
				rowSelcted={table.getSelectedRowModel().flatRows.map(row => row.original)}
			/>

			<div className=" overflow-x-auto rounded-t-xl  shadow-xl bg-gray-900">
				<table className="w-full ">
					<thead>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id} className="bg-[#1f2d3f]  ">
								{headerGroup.headers.map(header => (
									<th
										key={header.id}
										onClick={header.column.getToggleSortingHandler()}
										className="text-center py-3 px-2 text-blanco "
									>
										{flexRender(header.column.columnDef.header, header.getContext())}
									</th>
								))}
							</tr>
						))}
					</thead>
					<AnimatePresence mode="wait">
						<tbody key={table.getPageCount()}>
							{table.getRowModel().rows.map(row => (
								<motion.tr key={row.id} className=" ">
									{row.getVisibleCells().map(cell => (
										<td
											key={cell.id}
											className="py-4 px-2 text-center border-b border-[#19264193]"
										>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
								</motion.tr>
							))}
						</tbody>
					</AnimatePresence>
				</table>
			</div>
			<div className="flex justify-end gap-1 items-center px-3">
				<button
					onClick={() => table.setPageIndex(0)}
					className="rounded-full hover:bg-white/10 transition-colors ease-in-out duration-300 p-1"
				>
					<MdKeyboardDoubleArrowLeft className="w-6 h-6" />
				</button>
				<button
					onClick={() => (table.getCanPreviousPage() ? table.previousPage() : null)}
					className="rounded-full hover:bg-white/10 transition-colors ease-in-out duration-300 p-1 "
				>
					<MdKeyboardArrowLeft className="w-6 h-6" />
				</button>
				<h1>
					Página{" "}
					<span className="font-bold bg-white/10 px-2 py-1 rounded-lg ">
						{table.getState().pagination.pageIndex + 1}
					</span>
					{"  "}
					<span className="font-bold">{table.getPageCount()}</span>
				</h1>
				<button
					onClick={() => (table.getCanNextPage() ? table.nextPage() : null)}
					className=" hover:bg-white/10 rounded-full transition-colors ease-in-out duration-300 p-1"
				>
					<MdKeyboardArrowRight className="w-6 h-6" />
				</button>
				<button
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					className="rounded-full hover:bg-white/10 transition-colors ease-in-out duration-300 p-1"
				>
					<MdKeyboardDoubleArrowRight className="w-6 h-6" />
				</button>
			</div>
			
			<div className="mt-4 ">
				<h2 className="font-semibold">Filas seleccionadas:</h2>
				<pre>
					{JSON.stringify(
						table.getSelectedRowModel().flatRows.map(row => row.original),
						null,
						2
					)}
				</pre>
			</div>
		</div>
	);
}
