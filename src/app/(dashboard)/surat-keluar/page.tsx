import {SuratKeluarTable} from "@/app/(dashboard)/surat-keluar/surat-keluar-table";
import {PageParamsQuery} from "@/lib/general-type";
import {apiFetch, PaginateResponse} from "@/lib/api";
import SuratKeluarEntity from "@/entities/surat-keluar.entity";
import {Suspense} from "react";
import SkeletonTable from "@/components/ui/skeleton/skeleton-table";

export default async function EventPage({searchParams}: PageParamsQuery) {

    const response = await apiFetch<PaginateResponse<SuratKeluarEntity[]>>({
        url: 'surat-keluar',
        filter: {
            page: searchParams?.page,
            limit: searchParams?.limit,
            search: searchParams?.search
        }
    })
    console.log(response, 'response surat keluar')
    return <div>
        <h1 className={"mb-6 text-3xl font-bold"}>Surat Keluar</h1>
        <Suspense fallback={<SkeletonTable repeat={4}/>}>
            <SuratKeluarTable response={response}/>
        </Suspense>
    </div>
}
