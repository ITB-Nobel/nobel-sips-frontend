import Image from "next/image";

export default function AuthLayout({children}: { children: React.ReactNode }) {
    return <>
        <div className="md:hidden">
            <Image
                src="/examples/authentication-light.png"
                width={1280}
                height={843}
                alt="Authentication"
                className="block dark:hidden"
            />
            <Image
                src="/examples/authentication-dark.png"
                width={1280}
                height={843}
                alt="Authentication"
                className="hidden dark:block"
            />
        </div>
        <div
            className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            {children}
        </div>
    </>

}