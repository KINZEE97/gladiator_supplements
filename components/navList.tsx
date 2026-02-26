import Image from "next/image";
import Link from "next/link";

export default function NavList() {
    return (
        <header className="my-5 flex items-center justify-between border-b-2 border-gray-400">
            <Link href="/">
                <Image
                    src="/gladiator-helmet96.png"
                    width={75}
                    height={75}
                    alt="Logo"
                    className="rounded-full"
                />
            </Link>
            <nav className="flex gap-3 text-lg ">
                <Link
                    href="/products"
                    className="hover:underline hover:font-bold hover:scale-3d transition-all  duration-100"
                >
                    Products
                </Link>
                <Link
                    href="/about"
                    className="hover:underline hover:font-bold hover:scale-3d transition-all duration-100"
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    className="hover:underline hover:font-bold hover:scale-3d transition-all duration-100"
                >
                    Contact
                </Link>
                <Link
                    href="/login"
                    className="hover:underline hover:font-bold hover:scale-3d transition-all duration-100"
                >
                    Login
                </Link>
            </nav>
        </header>
    );
}
