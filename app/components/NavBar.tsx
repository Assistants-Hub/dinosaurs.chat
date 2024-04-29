
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";

export function NavBar() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand as={Link} href="https://flowbite-react.com">
                <Image src="/images/logo-100.png" className="mr-3 h-15" width="100" height="100" alt="Dinosaur Chat Logo" />
                <div>
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Dinosaurs Chat</span><br/>
                    <span className="text-balance text-slate-400">Ask a dino! Unlock the past!</span>
                </div>
            </Navbar.Brand>
        </Navbar>
    );
}
