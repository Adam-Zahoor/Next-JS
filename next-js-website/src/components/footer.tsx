import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <footer className="footerContainer">
            <ul className="footer-buttons">
                <li><Link href={"/home"}>Home</Link></li>
                <li><Link href={"/about-us"}>About Us</Link></li>
                <li><Link href={"/portfolio"}>Portfolio</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
            </ul>
            </footer>
        </div>
        )
}