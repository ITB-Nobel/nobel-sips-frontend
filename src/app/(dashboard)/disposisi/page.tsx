import {SuratKeluarTable} from "@/app/(dashboard)/surat-keluar/surat-keluar-table";

export default function EventPage() {

    return <div>
        <h1 className={"mb-6 text-3xl font-bold"}>Disposisi Surat</h1>
        <SuratKeluarTable data={[]}/>

    </div>
}
