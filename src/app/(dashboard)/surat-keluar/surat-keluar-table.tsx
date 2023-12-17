"use client"

import * as React from "react"
import BaseTable from "@/components/ui/table/base-table";
import {BaseTablePagination} from "@/components/ui/table/base-table-pagination";
import {BaseTableFacetedFilter} from "@/components/ui/table/base-table-faceted-filter";
import {labels, priorities, statuses} from "@/app/(dashboard)/table/data/data";
import {BaseTableToolbar} from "@/components/ui/table/base-table-toolbar";
import ModalForm from "@/components/ui/modal-form";
import useBaseTable, {IBaseTableProps} from "@/hooks/base-table-hooks";
import SuratKeluarEntity from "@/entities/surat-keluar.entity";
import SuratKeluarForm from "@/app/(dashboard)/surat-keluar/surat-keluar-form";
import {ColumnDef} from "@tanstack/react-table";
import {Checkbox} from "@/components/ui/checkbox";
import {BaseTableColumnHeader} from "@/components/ui/table/base-table-column-header";
import {Badge} from "@/components/ui/badge";
import {BaseTableRowActions} from "@/app/(dashboard)/table/components/columns";
import {Input} from "@/components/ui/input";

const columns: ColumnDef<SuratKeluarEntity>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Task"/>
        ),
        cell: ({row}) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Title"/>
        ),
        cell: ({row}) => {
            const label = labels.find((label) => label.value === row.original.dari)

            return (
                <div className="flex space-x-2">
                    {label && <Badge variant="outline">{label.label}</Badge>}
                    <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
                </div>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Status"/>
        ),
        cell: ({row}) => {
            const status = statuses.find(
                (status) => status.value === row.getValue("status")
            )

            if (!status) {
                return null
            }

            return (
                <div className="flex w-[100px] items-center">
                    {status.icon && (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground"/>
                    )}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "priority",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Priority"/>
        ),
        cell: ({row}) => {
            const priority = priorities.find(
                (priority) => priority.value === row.getValue("priority")
            )

            if (!priority) {
                return null
            }

            return (
                <div className="flex items-center">
                    {priority.icon && (
                        <priority.icon className="mr-2 h-4 w-4 text-muted-foreground"/>
                    )}
                    <span>{priority.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({row}) => <BaseTableRowActions row={row}/>,
    },
]

export function SuratKeluarTable({data}: Pick<IBaseTableProps<SuratKeluarEntity>, 'data'>) {
    const {table} = useBaseTable({data, columns})
    return (
        <div className="space-y-4">
            <BaseTableToolbar
                table={table}
                FilterComponent={<>
                    <Input
                        placeholder="Search..."
                        value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("title")?.setFilterValue(event.target.value)
                        }
                        className="h-8 w-[150px] lg:w-[250px]"
                    />
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
                ActionComponent={
                    <ModalForm
                        title={"Buat Surat Keluar"}
                        description={"Halaman untuk membuat surat keluar"}
                        buttonText={"Create"}
                        FormComponent={<SuratKeluarForm/>}
                        modalSize={"3xl"}
                    />}
            />
            <BaseTable table={table}/>
            <BaseTablePagination table={table}/>
        </div>
    )
}
