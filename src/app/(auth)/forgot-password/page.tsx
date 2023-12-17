import {Metadata} from "next"
import Link from "next/link"

import {cn} from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button";
import AuthLeftLayout from "@/app/(auth)/components/left-layout";
import {ForgotPasswordForm} from "@/app/(auth)/forgot-password/forgot-password-form";
import {ErrorTemplate} from "@/components/shared/error-template";

export const metadata: Metadata = {
    title: "Forgot Password",
    description: "Authentication forms built using the components.",
}

export default function ForgotPasswordPage() {
    return (
        <>
            <Link
                href="/auth/login"
                className={cn(
                    buttonVariants({variant: "ghost"}),
                    "absolute right-4 top-4 md:right-8 md:top-8"
                )}
            >
                Login
            </Link>
            <AuthLeftLayout />
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Reset Password
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Masukkan email yang telah teregistrasi di sistem
                        </p>
                    </div>
                    <ForgotPasswordForm/>
                </div>
            </div>
        </>
    )
}
