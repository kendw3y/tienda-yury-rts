import {
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    type SortingState,
    type RowSelectionState,
} from "@tanstack/react-table";
import { useState } from "react";
import { type User } from "../types/types";

interface useCoustomTableProps {
    data:User[]
    columns: ColumnDef<User>[]
}

export const useCoustomTable = ( { data, columns } : useCoustomTableProps) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [filters, setFilters] = useState("");
    const [rowSelectionState, setRowSelectionState] = useState<RowSelectionState>({});
  
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

    return {
        table,
        filters,
        setFilters
    }
}
