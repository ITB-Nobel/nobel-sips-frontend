'use client'
import {Button} from "@/components/ui/button";
import {ArrowLeftCircle} from "lucide-react";
import {useRouter} from "next/navigation";
import Image from "next/image";


export default function CustomError404() {
    const router = useRouter()
    return (
        <div
            className="flex h-screen bg-black text-white shrink-0 items-center justify-center">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">

                    <Image
                        src={"./404.svg"}
                        alt={"Something error page"}
                        width={420}
                        height={250}
                        className={"w-[420px] h-[300px]"}
                    />



                <h3 className="my-4 text-2xl font-semibold capitalize">Halaman tidak ditemukan 404</h3>


                <Button size="sm" variant={"primary"} className="relative " onClick={() => router.back()}>
                    <ArrowLeftCircle className={"mr-2 w-5 h-5"}/>
                    Kembali
                </Button>


            </div>
        </div>
    )
}
