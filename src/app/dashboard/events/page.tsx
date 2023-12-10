import {EventsTable} from "@/app/dashboard/events/events-table";
import {columns} from "@/app/dashboard/table/components/columns";

export default function EventPage() {

    return <div>
        <h1 className={"mb-6 text-3xl font-bold"}>Events Page</h1>
        <EventsTable
            columns={columns}
            data={[]}
        />

    </div>
}
