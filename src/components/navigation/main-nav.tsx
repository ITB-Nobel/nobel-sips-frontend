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

    const styles = {
        linkStyle: "flex-icon text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    }
    return (
        <nav
            className={cn("flex items-center space-x-16", className)}
            {...props}
        >
            <Image
                src="/logo.png"
                width={100}
                height={30}
                alt="Authentication"
                className="block w-[100px] h-[30px]"
            />
            <div className={"flex space-x-8 items-center"}>
                <Link
                    href="/dashboard"
                    className={cn(styles.linkStyle, `${pathname === "/dashboard" ? "active" : ""}`)}>
                    <DashboardIcon/>
                    Dashboard
                </Link>


                <NavigationMenuDemo/>

                <Link
                    href="/surat-masuk"
                    className={cn(styles.linkStyle, `${pathname === "/surat-masuk" ? "active" : ""}`)}>
                    <EnvelopeOpenIcon/>
                    Surat Masuk
                </Link>
                <Link
                    href="/surat-keluar"
                    className={cn(styles.linkStyle, `${pathname === "/surat-keluar" ? "active" : ""}`)}>
                    <EnvelopeClosedIcon/>
                    Surat Keluar
                </Link>
                <Link
                    href="/disposisi"
                    className={cn(styles.linkStyle, `${pathname === "/disposisi" ? "active" : ""}`)}>
                    <PaperPlaneIcon/>
                    Disposisi
                </Link>
            </div>

        </nav>
    )
}




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
                        <ul className="grid gap-1 px-4 py-2 w-[200px]">
                            <ListItem href="/docs" title="User"/>
                            <ListItem href="/docs/installation" title="Departemen"/>
                            <ListItem href="/docs/primitives/typography" title="Klasifikasi Surat"/>
                            <ListItem href="/docs/primitives/typography" title="Unit Kerja"/>
                            <ListItem href="/docs/primitives/typography" title="Layout Surat"/>
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
