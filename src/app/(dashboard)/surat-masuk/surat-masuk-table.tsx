"use client"

import * as React from "react"
import BaseTable from "@/components/ui/table/base-table";
import {BaseTablePagination} from "@/components/ui/table/base-table-pagination";
import {labels} from "@/app/(dashboard)/table/data/data";
import BaseTableToolbar from "@/components/ui/table/base-table-toolbar";
import ModalForm from "@/components/ui/modal-form";
import SuratMasukForm from "@/app/(dashboard)/surat-masuk/surat-masuk-form";
import useBaseTable from "@/hooks/base-table-hooks";
import SuratMasukEntity from "@/entities/surat-masuk.entity";
import {ColumnDef} from "@tanstack/react-table";
import {Checkbox} from "@/components/ui/checkbox";
import {BaseTableColumnHeader} from "@/components/ui/table/base-table-column-header";
import {Badge} from "@/components/ui/badge";
import {BaseTableRowActions} from "@/app/(dashboard)/table/components/columns";
import {Input} from "@/components/ui/input";
import {PaginateResponse} from "@/lib/api";
import FormSearch from "@/components/ui/forms/form-search";


const columns: ColumnDef<SuratMasukEntity>[] = [
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
        cell: ({row}) => <div className="w-[80px]">{row.getValue("nomor_surat")}</div>,
        enableSorting: false,
        enableHiding: false,
        enableColumnFilter: true
    },
    {
        accessorKey: "Dari",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Kepada"/>
        ),
        cell: ({row}) => {
            const label = labels.find((label) => label.value === row.original.penerima)
            return (
                <div className="flex space-x-2">
                    {label && <Badge variant="outline">{label.label}</Badge>}
                    <span className="max-w-[500px] truncate font-medium">
            {row.getValue("penerima")}
          </span>
                </div>
            )
        },
    },
    {
        accessorKey: "penerima",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Dari"/>
        ),
        cell: ({row}) => {
            const label = labels.find((label) => label.value === row.original.pengirim)

            return (
                <div className="flex space-x-2">
                    {label && <Badge variant="outline">{label.label}</Badge>}
                    <span className="max-w-[500px] truncate font-medium">
            {row.getValue("penerima")}
          </span>
                </div>
            )
        },
    },
    // {
    //     accessorKey: "Tanggal Surat Dibuat",
    //     header: ({column}) => (
    //         <BaseTableColumnHeader column={column} title="Tanggal Surat Dibuat"/>
    //     ),
    //     cell: ({row}) => {
    //         const label = labels.find((label) => label.value === row.original.tanggal_surat)
    //
    //         return (
    //             <div className="flex space-x-2">
    //                 {label && <Badge variant="outline">{label.label}</Badge>}
    //                 <span className="max-w-[500px] truncate font-medium">
    //         {row.getValue("tanggal_surat")}
    //       </span>
    //             </div>
    //         )
    //     },
    // },
    {
        id: "actions",
        header: ({column}) => (
            <BaseTableColumnHeader column={column} title="Actions"/>
        ),
        // cell: ({row}) => <BaseTableRowActions row={row}/>,
    },
]

export  function SuratMasukTable({response:{data,meta,links}}: { response: PaginateResponse<SuratMasukEntity[]> }) {
    const {table} = useBaseTable({data, columns})
    return (
        <div className="space-y-4">
            <BaseTableToolbar
                table={table}
                FilterComponent={<>
                    <FormSearch />
                    {/*{table.getColumn("status") && (*/}
                    {/*    <BaseTableFacetedFilter*/}
                    {/*        column={table.getColumn("status")}*/}
                    {/*        title="Status"*/}
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
                        title={"Hello World"}
                        description={"Test Description"}
                        buttonText={"Create"}
                        FormComponent={<SuratMasukForm/>}
                        modalSize={"sm"}
                    />}
            />
            <BaseTable table={table} data={data}/>
            <BaseTablePagination table={table} meta={meta}/>
        </div>
    )
}
