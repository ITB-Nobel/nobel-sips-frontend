import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.css'

const inter = Roboto({weight: ["400", "500", "700"], subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Dashboard Template',
    description: 'Base Dashboard Template for project',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
            {children}
            {/*<footer className={"w-full text-center bg-black text-white text-sm"}>*/}
            {/*    <div className={"container"}>*/}
            {/*        tes@mail.com*/}
            {/*    </div>*/}

            {/*</footer>*/}
            </body>
        </html>
    )
}
