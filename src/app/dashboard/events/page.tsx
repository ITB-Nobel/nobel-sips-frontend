import ModalForm from "@/components/shared/modal-form";
import EventsForm from "@/app/dashboard/events/events-form";

export default function EventPage() {

    return <div>

        <ModalForm
            title={"Hello World"}
            description={"Test Description"}
            buttonText={"Create"}
            FormComponent={<EventsForm/>}
            modalSize={"xl"}
        />


    </div>
}
