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
        accessorKey: "nomor_surat",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Nomor Surat"/>
        ),
        cell: ({row}) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "kepada yth",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Kepada"/>
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
        accessorKey: "dari",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Dari"/>
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
        accessorKey: "Tanggal Surat Dibuat",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Tanggal Surat Dibuat"/>
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
        id: "actions",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Actions"/>
        ),
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
                        value={(table.getColumn("nomor_surat")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("nomor_surat")?.setFilterValue(event.target.value)
                        }
                        className="h-8 w-[150px] lg:w-[250px]"
                    />
                    {/*{table.getColumn("nomor_surat") && (*/}
                    {/*    <BaseTableFacetedFilter*/}
                    {/*        column={table.getColumn("nomor_surat")}*/}
                    {/*        title="Nomor Surat"*/}
                    {/*        options={statuses}*/}
                    {/*    />*/}
                    {/*)}*/}
                    {/*{table.getColumn("priority") && (*/}
                    {/*    <BaseTableFacetedFilter*/}
                    {/*        column={table.getColumn("priority")}*/}
                    {/*        title="Priority"*/}
                    {/*        options={priorities}*/}
                    {/*    />*/}
                    {/*)}*/}
                </>}
                ActionComponent={
                    <ModalForm
                        title={"Buat Surat Keluar"}
                        description={"Halaman untuk membuat surat keluar"}
                        buttonText={"Create"}
                        FormComponent={<SuratKeluarForm/>}
                        modalSize={"5xl"}
                    />}
            />
            <BaseTable table={table}/>
            <BaseTablePagination table={table}/>
        </div>
    )
}
