import {SuratMasukTable} from "@/app/(dashboard)/surat-masuk/surat-masuk-table";
import {apiFetch, PaginateResponse} from "@/lib/api";
import SuratMasukEntity from "@/entities/surat-masuk.entity";
import {PageParamsQuery} from "@/lib/general-type";
import {Suspense} from "react";
import SkeletonTable from "@/components/ui/skeleton/skeleton-table";
export const dynamic = 'force-dynamic'
export default async function EventPage({searchParams}: PageParamsQuery) {
    const response = await apiFetch<PaginateResponse<SuratMasukEntity[]>>({
        url: 'surat-masuk',
        filter: {
            page: searchParams?.page,
            limit: searchParams?.limit,
            search: searchParams?.search
        }
    })
    return <div>
        <h1 className={"mb-6 text-3xl font-bold"}>Surat Masuk</h1>
        <Suspense fallback={<SkeletonTable repeat={4}/>}>
            <SuratMasukTable response={response}/>
        </Suspense>
    </div>
}
