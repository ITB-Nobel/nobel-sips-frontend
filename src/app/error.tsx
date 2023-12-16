'use client'
import {Button} from "@/components/ui/button";
import {ArrowLeftCircle} from "lucide-react";
import {useRouter} from "next/navigation";
import Image from "next/image";


export default function CustomError500() {
    const router = useRouter()
    return (
        <div
            className="flex h-screen bg-black text-white shrink-0 items-center justify-center">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <Image
                    src={"/500.svg"}
                    alt={"Something error page"}
                    width={420}
                    height={250}
                    className={"w-[420px] h-[300px]"}
                />
                <h3 className="my-4 text-2xl font-semibold capitalize">  Terjadi kesalahan di sisi server</h3>
                {/*<p className="mb-4 mt-2 text-md text-muted-foreground">*/}
                {/*    Terjadi kesalahan di sisi server*/}
                {/*</p>*/}

                <Button size="sm" variant={"primary"} className="relative " onClick={() => router.back()}>
                    <ArrowLeftCircle className={"mr-2 w-5 h-5"}/>
                    Kembali
                </Button>


            </div>
        </div>
    )
}
