import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faGear, faHome} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <nav className={"navbar-desktop"}>
            <ul className={"onglet-container"}>
                <li className={"onglet"}><a href="#"><FontAwesomeIcon icon={faHome} /></a></li>
                <li className={"onglet"}><a href="#"><FontAwesomeIcon icon={faBookmark} /></a></li>
                <li className={"onglet"}><a href="#"><FontAwesomeIcon icon={faGear} /></a></li>
            </ul>
        </nav>
    )
}