import * as React from "react"

import {cn} from "@/lib/utils"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/ui/icons";
import SubmitButton from "@/components/shared/submit-button";
import {revalidatePath} from "next/cache";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}


export function UserAuthForm({className, ...props}: UserAuthFormProps) {


    async function onSubmit(formData: FormData) {
        'use server'
        setTimeout(() => {
            console.log(formData.get('email'),'ini formdata')
            revalidatePath('/auth/login')
        }, 3000)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form action={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            name={"email"}
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            // disabled={isLoading}
                        />
                    </div>
                    <SubmitButton />
                    {/*<Button >*/}
                    {/*    /!*{isLoading && (*!/*/}
                    {/*    /!*    <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>*!/*/}
                    {/*    /!*)}*!/*/}
                    {/*    Sign In with Email*/}
                    {/*</Button>*/}
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"/>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
            </div>
            <Button variant="outline" type="button" >
                {/*{isLoading ? (*/}
                {/*    <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>*/}
                {/*) : (*/}
                    <Icons.gitHub className="mr-2 h-4 w-4"/>
                {/*)}{" "}*/}
                Github
            </Button>
        </div>
    )
}
