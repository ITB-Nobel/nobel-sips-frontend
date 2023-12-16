"use client"

import * as React from "react"
import BaseTable from "@/components/ui/table/base-table";
import {BaseTablePagination} from "@/components/ui/table/base-table-pagination";
import {BaseTableFacetedFilter} from "@/components/ui/table/base-table-faceted-filter";
import {priorities, statuses} from "@/app/(dashboard)/table/data/data";
import {BaseTableToolbar} from "@/components/ui/table/base-table-toolbar";
import ModalForm from "@/components/ui/modal-form";
import SuratMasukForm from "@/app/(dashboard)/surat-masuk/surat-masuk-form";
import useBaseTable, {IBaseTableProps} from "@/hooks/base-table-hooks";
import {Task} from "@/app/(dashboard)/table/data/schema";


export function DisposisiTable({
                                columns,
                                data,
                            }: IBaseTableProps<Task>) {

    const {table} = useBaseTable({data, columns})

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
                ActionComponent={
                    <ModalForm
                        title={"Hello World"}
                        description={"Test Description"}
                        buttonText={"Create"}
                        FormComponent={<SuratMasukForm/>}
                        modalSize={"sm"}
                    />}
            />
            <BaseTable table={table}/>
            <BaseTablePagination table={table}/>
        </div>
    )
}
