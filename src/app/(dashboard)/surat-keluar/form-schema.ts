import * as zod from "zod";

export const schema = zod.object({
    kepada: zod.string(),
    dari: zod.string(),
    perihal: zod.string(),
    tembusan: zod.string(),
    lampiran: zod.string(),
    tanggal_surat_dibuat: zod.date(),

    sifat: zod.string(),
    urgensi: zod.string(),

    isi_surat: zod.string(),
    attachment: zod.string(),
    komentar: zod.string(),
    referensi: zod.string()
})

export type SuratKeluarSchema = zod.infer<typeof schema>
