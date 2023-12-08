import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";

type ModalFormT = {
    title: string,
    description: string,
    buttonText: string,
    FormComponent: React.ReactNode
}
export default function ModalForm({title, description, buttonText = "Tambah", FormComponent}: ModalFormT) {
    return <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" size={"sm"}>{buttonText}</Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>{title}</SheetTitle>
                <SheetDescription>
                    {description}
                </SheetDescription>
            </SheetHeader>
            {FormComponent}
        </SheetContent>
    </Sheet>
}