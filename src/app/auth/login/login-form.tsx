'use client'

import * as React from "react"
import {useState} from "react"

import {cn} from "@/lib/utils"
import SubmitButton from "@/components/ui/submit-button";
import FormInput from "@/components/ui/forms/form-input";
import {useForm} from "react-hook-form";
import * as zod from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";

import Link from "next/link";
import {postAction} from "@/lib/action";

export const loginFormSchema = zod.object({
    username: zod.string().min(3),
    password: zod.string().min(3)
})

export type TLoginFormSchema = zod.infer<typeof loginFormSchema>

export function LoginForm({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    const [loading, setLoading] = useState(false)
    const form = useForm<TLoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    async function onSubmit(data: TLoginFormSchema) {
        setLoading(true)
        await postAction({
            url: '',
            payload: data
        })
        setLoading(false)
    }

    return (
        <div className={cn("space-y-3", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <FormInput
                            label={"Username"}
                            name={"username"}
                            control={form.control}
                        />

                        <FormInput
                            label={"Password"}
                            name={"password"}
                            control={form.control}
                        />
                        <SubmitButton loading={loading}/>
                    </div>
                </form>
            </Form>
            <div>
                <Link href={"/auth/forgot-password"}>
                    <div className={"text-sm cursor-pointer text-center w-full text-slate-700"}> Forgot password ?</div>
                </Link>
            </div>
        </div>
    )
}
