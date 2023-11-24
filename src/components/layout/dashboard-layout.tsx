import Image from "next/image";
import {MainNav} from "@/components/layout/main-nav";
import {UserNav} from "@/components/layout/user-nav";

const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    return <>
        <div className="md:hidden">
            <Image
                src="/examples/dashboard-light.png"
                width={1280}
                height={866}
                alt="Dashboard"
                className="block dark:hidden"
            />
            <Image
                src="/examples/dashboard-dark.png"
                width={1280}
                height={866}
                alt="Dashboard"
                className="hidden dark:block"
            />
        </div>
        <div className="hidden flex-col md:flex ">
            <div className="border-b  bg-black text-white ">
                <div className="flex h-16 items-center px-12 container">
                    <MainNav className="mx-6"/>
                    <div className="ml-auto flex items-center space-x-4">
                        <UserNav/>
                    </div>
                </div>
            </div>
        </div>
        <div className={"container"}>
            {children}
        </div>

    </>
}

export default DashboardLayout