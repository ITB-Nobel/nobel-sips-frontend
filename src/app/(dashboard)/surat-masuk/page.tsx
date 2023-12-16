import {SuratMasukTable} from "@/app/(dashboard)/surat-masuk/surat-masuk-table";
import {columns} from "@/app/(dashboard)/table/components/columns";

export default function EventPage() {

    return <div>
        <h1 className={"mb-6 text-3xl font-bold"}>Surat Masuk</h1>
        <SuratMasukTable
            columns={columns}
            data={[]}
        />

    </div>
}
