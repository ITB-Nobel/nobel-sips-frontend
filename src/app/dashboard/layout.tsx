
import {UserNav} from "@/components/navigation/user-nav";
import {MainNav} from "@/components/navigation/main-nav";


export default function Layout({children}: { children: React.ReactNode }){
    return <>
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
        <div className={"container px-20 py-12"}>
            {children}
        </div>

    </>
}
