'use client'


import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {SheetClose, SheetFooter} from "@/components/ui/sheet";
import {useForm} from "react-hook-form";
import SubmitButton from "@/components/ui/submit-button";
import {useState} from "react";
import {postAction} from "@/lib/action";

export default function SuratMasukForm() {
    const [loading, setLoading] = useState(false)
    const {register, control} = useForm({
        defaultValues: {
            name: 'anton',
            username: 'bani'
        }
    })
    return <form action={(payload) => postAction({url: 'test', payload})}>
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label
                    htmlFor="name"
                    className="text-right"
                >
                    Name
                </Label>
                <Input
                    className="col-span-3"
                    {...register('name')}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Username
                </Label>
                <Input
                    className="col-span-3"
                    {...register('username')}
                />
            </div>
        </div>
        <SheetFooter>
            <SheetClose asChild>
                <SubmitButton loading={loading}/>
            </SheetClose>
        </SheetFooter>
    </form>
}
