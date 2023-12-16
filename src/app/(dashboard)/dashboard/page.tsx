import {Metadata} from "next"
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {CalendarDateRangePicker} from "@/app/(dashboard)/dashboard/components/date-range-picker";
import {EnvelopeClosedIcon, EnvelopeOpenIcon, PaperPlaneIcon} from "@radix-ui/react-icons";
import React from "react";
import {Overview} from "@/app/(dashboard)/dashboard/components/overview";
// import {Overview} from "@/app/dashboard/components/overview";
// import {RecentSales} from "@/app/dashboard/components/recent-sales";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Halaman Dashboard"
}

export default function DashboardPage() {
    return <div className="flex-1 space-y-4 ">
        <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
                <CalendarDateRangePicker/>
                <Button>Tampilkan</Button>
            </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reports">
                    Reports
                </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Surat Masuk
                            </CardTitle>
                            <EnvelopeOpenIcon className={"h-6 w-6"} strokeWidth={1}/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">20</div>
                            <p className="text-xs text-muted-foreground capitalize cursor-pointer">
                                Lihat selengkapnya
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Surat Keluar
                            </CardTitle>
                            <EnvelopeClosedIcon className={"h-6 w-6"} strokeWidth={1}/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">350</div>
                            <p className="text-xs text-muted-foreground capitalize cursor-pointer">
                                Lihat selengkapnya
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Disposisi Surat</CardTitle>
                            <PaperPlaneIcon className={"h-6 w-6"} strokeWidth={1}/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">234</div>
                            <p className="text-xs text-muted-foreground capitalize cursor-pointer">
                                Lihat selengkapnya
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-7">
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <Overview/>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
        </Tabs>
    </div>
}
