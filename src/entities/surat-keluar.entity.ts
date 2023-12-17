export default interface SuratKeluarEntity {
    id: string
    kepada: string
    dari: string
    nomor_surat:string
    tembusan: string
    tanggal_surat_dibuat: Date
    lampiran: string
    sifat: string
    urgensi: string
    perihal: string
    isi_surat: string
    attachment: string
    komentar: string
    referensi: string
}
