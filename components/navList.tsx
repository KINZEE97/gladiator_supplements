import Image from "next/image";
import Link from "next/link";

export default function NavList() {
    return (
        <header className="my-5">
            <Link href="/">
                <Image
                    src="/treinner.png"
                    width={200}
                    height={200}
                    alt="Logo"
                    className="rounded-full"
                />
            </Link>
        </header>
    );
}
