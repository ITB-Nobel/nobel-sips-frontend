import {Metadata} from "next"
import Link from "next/link"

import {cn} from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button";
import AuthLeftLayout from "@/app/(auth)/components/left-layout";
import {LoginForm} from "@/app/(auth)/login/login-form";

export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}

export default function LoginPage() {
    return (
        <>
            {/*<Link*/}
            {/*    href="/auth/registration"*/}
            {/*    className={cn(*/}
            {/*        buttonVariants({variant: "ghost"}),*/}
            {/*        "absolute right-4 top-4 md:right-8 md:top-8"*/}
            {/*    )}*/}
            {/*>*/}
            {/*    Register*/}
            {/*</Link>*/}
            <AuthLeftLayout/>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl capitalize font-semibold tracking-tight">
                            Login dengan akun anda
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Input username dan password untuk masuk ke sistem
                        </p>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </>
    )
}
