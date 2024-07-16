import { Link } from "react-router-dom";
import face from "./facebook.png";
import insta from "./instagram.png";

const Footer = () => {
    return(
        <footer className="footer bg-neutral text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link className='btn btn-ghost text-xl'>
                    <img src={face} alt="facebook" />
                </Link>
                <Link className='btn btn-ghost text-xl'>
                    <img src={insta} alt="facebook" />
                </Link>
            </nav>
        </footer>
    );
}

export default Footer;