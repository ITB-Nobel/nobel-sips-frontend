"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import BaseTable from "@/components/ui/table/base-table";
import {BaseTablePagination} from "@/components/ui/table/base-table-pagination";
import {BaseTableFacetedFilter} from "@/components/ui/table/base-table-faceted-filter";
import {priorities, statuses} from "@/app/(dashboard)/table/data/data";
import {BaseTableToolbar} from "@/components/ui/table/base-table-toolbar";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                         }: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({})
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [sorting, setSorting] = React.useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })

    return (
        <div className="space-y-4">
            <BaseTableToolbar
                table={table}
                FilterComponent={<>
                    {table.getColumn("status") && (
                        <BaseTableFacetedFilter
                            column={table.getColumn("status")}
                            title="Status"
                            options={statuses}
                        />
                    )}
                    {table.getColumn("priority") && (
                        <BaseTableFacetedFilter
                            column={table.getColumn("priority")}
                            title="Priority"
                            options={priorities}
                        />
                    )}
                </>}
            />
            <BaseTable table={table}/>
            <BaseTablePagination table={table}/>
        </div>
    )
}
