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
import {postAction} from "@/lib/action";

export const forgotPasswordSchema = zod.object({
    email: zod.string().email(),
})

export type TForgotPasswordSchema = zod.infer<typeof forgotPasswordSchema>

export function ForgotPasswordForm({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    const [loading, setLoading] = useState(false)
    const form = useForm<TForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema)
    })

    async function onSubmit(data: TForgotPasswordSchema) {
        setLoading(true)
        await postAction({
            url: "",
            payload: data
        })
        setLoading(false)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <FormInput
                            label={"Email"}
                            name={"email"}
                            control={form.control}
                        />
                        <SubmitButton loading={loading}/>
                    </div>
                </form>
            </Form>
        </div>
    )
}
