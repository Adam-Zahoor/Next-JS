import Link from "next/link"

export default function Header() {
    return (
    <div>
        <div className="header">
            <ul className="header-buttons">

                <Link href={"/home"}>
                    <li>Home</li>
                </Link>

                <Link href={"/about-us"}>
                    <li>About Us</li>
                </Link>

                <Link href={"/portfolio"}>
                    <li>Portfolio</li>
                </Link>

                <Link href={"/contact"}>
                    <li>Contact</li>
                </Link>

            </ul>
        </div>
    </div>
    )
}