"use client"
import Link from "next/link"

import {cn} from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import React from "react";
import Image from "next/image";
import {DashboardIcon, EnvelopeClosedIcon, EnvelopeOpenIcon, PaperPlaneIcon} from "@radix-ui/react-icons";
import {DatabaseIcon} from "lucide-react";
import {usePathname} from "next/navigation";

export function MainNav({
                            className,
                            ...props
                        }: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname()
    return (
        <nav
            className={cn("flex items-center space-x-16", className)}
            {...props}
        >
            <Image
                src="vercel.svg"
                width={100}
                height={30}
                alt="Authentication"
                className="block w-[100px] h-[30px]"
            />
            <div className={"flex space-x-8 items-center"}>
                <Link
                    href="/dashboard"
                    className={"flex-icon text-sm font-medium text-muted-foreground transition-colors hover:text-primary"}>
                    <DashboardIcon/>
                    Dashboard
                </Link>


                <NavigationMenuDemo/>

                <Link
                    href="/dashboard/surat-masuk"
                    className="flex-icon text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    <EnvelopeOpenIcon/>
                    Surat Masuk
                </Link>
                <Link
                    href="/dashboard/surat-keluar"
                    className="flex-icon text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    <EnvelopeClosedIcon/>
                    Surat Keluar
                </Link>
                <Link
                    href="/dashboard/disposisi"
                    className="flex-icon text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    <PaperPlaneIcon/>
                    Disposisi
                </Link>
            </div>

        </nav>
    )
}


const components: { title: string; href: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card"
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress"
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area"
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs"
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip"
    },
]


export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={"bg-black text-white flex-icon"}>
                        <DatabaseIcon className={"w-4 h-4"}/>
                        Master Data
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[200px]">
                            <ListItem href="/docs" title="User"/>
                            <ListItem href="/docs/installation" title="Departemen"/>
                            {/*<ListItem href="/docs/primitives/typography" title="Country"/>*/}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "hover:text-primary block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent  focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
