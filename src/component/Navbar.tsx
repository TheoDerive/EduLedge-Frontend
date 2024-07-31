import {HomeIcon, SaveIcon, SettingsIcon} from "./Icon.tsx";

export default function Navbar() {
    return (
        <nav className={"navbar-desktop"}>
            <ul className={"onglet-container"}>
                <li className={"onglet"}><a href="#"><HomeIcon isSelected={true} /></a></li>
                <li className={"onglet"}><a href="#"><SaveIcon isSelected={false} /></a></li>
                <li className={"onglet"}><a href="#"><SettingsIcon isSelected={false}/></a></li>
            </ul>
        </nav>
    )
}