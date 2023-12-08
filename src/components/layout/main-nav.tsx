"use client"
import Link from "next/link"

import {cn} from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import React from "react";
import Image from "next/image";

export function MainNav({
                            className,
                            ...props
                        }: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Image
                src="/examples/authentication-light.png"
                width={100}
                height={20}
                alt="Authentication"
                className="block dark:hidden"
            />
            <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Dashboard
            </Link>
            {/*<Link*/}
            {/*    href="/dashboard/table"*/}
            {/*    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"*/}
            {/*>*/}
            {/*    Master Data*/}
            {/*</Link>*/}

            <NavigationMenuDemo/>

            <Link
                href="/dashboard/events"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Events
            </Link>
            <Link
                href="/dashboard/website"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Website
            </Link>
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
                    <NavigationMenuTrigger className={"bg-black text-white"}>Master Data</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[200px]">
                            <ListItem href="/docs" title="Staff"/>
                            <ListItem href="/docs/installation" title="School"/>
                            <ListItem href="/docs/primitives/typography" title="Country"/>
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
