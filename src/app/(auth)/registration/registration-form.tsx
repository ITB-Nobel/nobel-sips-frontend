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


export const registrationFormSchema = zod.object({
    username: zod.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export type TRegistrationFormSchema = zod.infer<typeof registrationFormSchema>

export function RegistrationForm({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    const [loading, setLoading] = useState(false)
    const form = useForm<TRegistrationFormSchema>({
        resolver: zodResolver(registrationFormSchema)
    })

    async function onSubmit(data: TRegistrationFormSchema) {
        setLoading(true)
        await postAction({
            url: '',
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


        </div>
    )
}
