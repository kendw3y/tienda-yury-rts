import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type SortingState,
  type RowSelectionState,
} from "@tanstack/react-table";
import { useState } from "react";
//Icons
import { IoMdTrash } from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdEdit,
  MdOutlineAdd,
} from "react-icons/md";
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";
import { ConfirModal } from "./ConfirModal";

interface TableProps {
  data: any[];
  columnas: any[];
  title?: string;
}

export function Table({ data, columnas, title }: TableProps) {
  type TypeData = typeof data;
  

  const columns: ColumnDef<TypeData>[] = [
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
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filters, setFilters] = useState("");
  const [rowSelectionState, setRowSelectionState] = useState<RowSelectionState>(
    {}
  );

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filters,
      rowSelection: rowSelectionState,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilters,
    onRowSelectionChange: setRowSelectionState,
    enableRowSelection: true,
  });

  const [showadduser, setShowAddUser] = useState(false);
  const [showedituser, setShowEditUser] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  console.log(table.getSelectedRowModel().flatRows)
  return (
    <div className="bg-gray-900  rounded-xl shadow-xl flex flex-col gap-6 py-8 px-10">
      <h1 className="text-3xl font-bold">{title ?? "Table"}</h1>

      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-gray-700 border border-gray-700  rounded-sm px-2 py-1   transition-all ease-in-out duration-400 "
          value={filters}
          onChange={(e) => setFilters(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <button onClick={()=> setShowAddUser(!showadduser)} >
            <MdOutlineAdd className="w-9 h-9 text-[#335BC6] "  />
          </button>
          <button onClick={()=> setShowEditUser(!showedituser)}  className="disabled:bg-white/10 p-1 rounded-full disabled:opacity-45" disabled={table.getSelectedRowModel().flatRows.length!==1}>
            <MdEdit className="w-9 h-9 text-[#fccf08d5]" />
          </button>
          <button onClick={()=> setShowConfirmDelete(!showConfirmDelete)} className="disabled:bg-white/10 p-1 rounded-full disabled:opacity-45" disabled={table.getSelectedRowModel().flatRows.length<1}>
            <IoMdTrash className="w-9 h-9 text-[#D40C63]" />
          </button>
        </div>
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-[#1D2939] rounded-2xl ">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="text-center py-2 px-2 text-blanco "
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className=" ">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="py-4 px-2 text-center border-b border-[#3E4F6F]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end gap-1 items-center px-3">
        <button
          onClick={() => table.setPageIndex(0)}
          className="rounded-full hover:bg-white/10 transition-colors ease-in-out duration-300 p-1"
        >
          <MdKeyboardDoubleArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() =>
            table.getCanPreviousPage() ? table.previousPage() : null
          }
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
      {showadduser&& <AddUser isVisible={()=>setShowAddUser(!showadduser)} />}
      {showedituser && <EditUser isVisible={()=>setShowEditUser(!showedituser) } user={ table.getSelectedRowModel().flatRows[0].original}/>}
      {showConfirmDelete&& <ConfirModal isOpen={showConfirmDelete} onCancel={()=>setShowConfirmDelete(false)}  message="¿Desea eliminar este usuario?" tittle="Eliminar" onConfirm={()=>{}}/>}
      <div className="mt-4 hidden">
        <h2 className="font-semibold">Filas seleccionadas:</h2>
        <pre>
          {JSON.stringify(
            table.getSelectedRowModel().flatRows.map((row) => row.original),
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
}
