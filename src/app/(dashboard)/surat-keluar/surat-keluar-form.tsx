'use client'
import {SheetClose, SheetFooter} from "@/components/ui/sheet";
import {useForm} from "react-hook-form";
import SubmitButton from "@/components/ui/submit-button";
import {useState} from "react";
import FormInput from "@/components/ui/forms/form-input";
import {zodResolver} from "@hookform/resolvers/zod";
import {schema, SuratKeluarSchema} from "@/app/(dashboard)/surat-keluar/form-schema";
import {postAction} from "@/lib/action";
import {Form} from "@/components/ui/form";
import FormDate from "@/components/ui/forms/form-date";
import FormTextarea from "@/components/ui/forms/form-textarea";


export default function SuratKeluarForm() {
    const [loading, setLoading] = useState(false)
    const form = useForm<SuratKeluarSchema>({
        resolver: zodResolver(schema)
    })
    const handleSubmit = async (payload: SuratKeluarSchema) => {
        setLoading(true)
        await postAction<SuratKeluarSchema>({
            url: '',
            payload
        })
        setLoading(false)
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 py-4">
                <FormInput
                    label={"Kepada"}
                    name={"kepada"}
                    control={form.control}
                />

                <FormInput
                    label={"Dari"}
                    name={"dari"}
                    control={form.control}
                />

                <FormInput
                    label={"Perihal"}
                    name={"perihal"}
                    control={form.control}
                />

                <FormInput
                    label={"Tembusan"}
                    name={"tembusan"}
                    control={form.control}
                />

                <FormInput
                    label={"Lampiran"}
                    name={"lampiran"}
                    control={form.control}
                />

                <FormDate
                    label={"Tanggal Surat Dibuat"}
                    name={"tanggal_surat_dibuat"}
                    control={form.control}
                />

                <div className={"col-span-2"}>
                    <FormTextarea
                        label={"Komentar"}
                        name={"komentar"}
                        control={form.control}
                    />
                </div>

                <div className={"col-span-2"}>
                    <FormTextarea
                        label={"Referensi"}
                        name={"referensi"}
                        control={form.control}
                    />
                </div>

                <div className={"col-span-2"}>
                    {/*<FormTinymce*/}
                    {/*    label={"Isi Surat"}*/}
                    {/*    name={"isi_surat"}*/}
                    {/*    control={form.control}*/}
                    {/*/>*/}
                </div>

                {/*<Dropzone*/}
                {/*    options={{*/}
                {/*        url: ``,*/}
                {/*        acceptedFiles:*/}
                {/*            "text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",*/}
                {/*        maxFilesize: 2,*/}
                {/*        maxFiles: 1,*/}
                {/*        headers: {*/}
                {/*            // Authorization: `Bearer ${user?.token}`,*/}
                {/*        },*/}
                {/*        addRemoveLinks: true,*/}
                {/*        success: (file) => {*/}
                {/*        },*/}
                {/*        removedfile: (file) => {*/}
                {/*            file.previewElement.remove();*/}
                {/*        },*/}
                {/*    }}*/}
                {/*    className="dropzone"*/}
                {/*>*/}
                {/*    <div className="text-md font-medium">Upload File</div>*/}
                {/*    <div className="text-gray-600">Maximal 2 Mb</div>*/}
                {/*</Dropzone>*/}

                {/*<FormDropzone*/}
                {/*    label={"Attactment"}*/}
                {/*    name={"attactment"}*/}
                {/*    control={form.control}*/}
                {/*    />*/}
            </div>
            <SheetFooter>
                <SheetClose asChild>
                    <SubmitButton loading={loading}/>
                </SheetClose>
            </SheetFooter>
        </form>
    </Form>
}
