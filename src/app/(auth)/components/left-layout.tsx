import Image from "next/image";

export default function AuthLeftLayout(){
    return  <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 ">
            <div className={"relative w-full h-screen brightness-50"}>
                <Image src={"/nobel.jpeg"}
                       alt={"Nobel Building"}
                       objectFit={"center"}
                       fill={true}
                />
            </div>

        </div>
        <div className="relative z-20 flex items-center text-lg font-medium">
            <Image src={"/logo.png"}
                   alt={"Logo Nobel"}
                   width={250}
                   height={50}
            />
        </div>
        <div className="relative z-20 mt-auto">
            <h3 className={"text-4xl font-semibold"}>Sistem Informasi Persuratan</h3>
            {/*<blockquote className="space-y-2">*/}
            {/*    <p className="text-lg">*/}
            {/*        &ldquo;This library has saved me countless hours of work and*/}
            {/*        helped me deliver stunning designs to my clients faster than*/}
            {/*        ever before.&rdquo;*/}
            {/*    </p>*/}
            {/*    <footer className="text-sm">Sofia Davis</footer>*/}
            {/*</blockquote>*/}
        </div>
    </div>
}
