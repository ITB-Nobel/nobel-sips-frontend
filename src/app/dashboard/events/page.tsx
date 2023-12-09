import {EventsTable} from "@/app/dashboard/events/events-table";
import {columns} from "@/app/dashboard/table/components/columns";

export default function EventPage() {

    return <div className={"py-12"}>
        <h1 className={"mb-12 text-2xl font-medium"}>Events Page</h1>
        <EventsTable
            columns={columns}
            data={[]}
        />

    </div>
}
