'use client'


import {Button} from "@/components/ui/button";
import {useFormStatus} from 'react-dom'

export default function SubmitButton() {
    const {pending} = useFormStatus()
    return <Button variant={"default"} disabled={pending} type={"submit"}>
        {pending ? "Loading..." : "Submit"}
    </Button>
}