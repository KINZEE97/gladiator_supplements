"use client";

import {
    LogInIcon,
    ShoppingBag,
    ShoppingCart,
    Store,
    Menu,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default function NavList() {
    return (
        <header className="my-5 flex items-center justify-between border-b-2 border-gray-400 pb-2">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/gladiator-helmet96.png"
                    width={75}
                    height={75}
                    alt="Logo"
                    className="rounded-full bg-white p-2"
                />
                <p className="text-xl font-light tracking-widest">
                    Gladiator Supplements
                </p>
            </Link>
            <nav className="sm:hidden -md:hidden lg:flex gap-3 text-lg ">
                <Link
                    href="/products"
                    className="hover:underline hover:font-bold hover:scale-3d transition-all  duration-100 flex items-center gap-1"
                >
                    <ShoppingBag size={20} />
                    Products
                </Link>
                <Link
                    href="/about"
                    className="hover:underline hover:font-bold hover:scale-3d transition-all duration-100 flex items-center gap-1"
                >
                    <ShoppingCart size={20} />
                    Cart
                </Link>
                <Link
                    href="/cart"
                    className="hover:underline hover:font-bold hover:scale-3d transition-all duration-100 flex items-center gap-1"
                >
                    <Store size={20} />
                    Contact
                </Link>
                <Link
                    href="/login"
                    className="hover:underline hover:font-bold hover:scale-3d transition-all duration-100 flex items-center gap-1"
                >
                    <LogInIcon size={20} />
                    Login
                </Link>
            </nav>

            <div className="lg:hidden md:block  ">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Menu
                            size={20}
                            className="cursor-pointer hover:scale-3d transition-all  duration-100"
                        />
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Link href="/products">Products</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/about">About</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/cart">Cart</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/contact">Contact</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href="/login">Login</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            </div>
        </header>
    );
}
