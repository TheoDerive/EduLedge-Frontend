import {HomeIcon, SaveIcon, SettingsIcon, TokensIcon} from "./Icon.tsx";
import {useStore} from "../hooks/useStore.ts";
import {Link} from "react-router-dom";

export default function Navbar() {
    const {user} = useStore()

    return (
        <nav className={"navbar-desktop"}>
            <ul className={"onglet-container"}>
                <li className={"tokens-limit"}><TokensIcon /> <p>{user.tokens}</p></li>
                <li className={"onglet"}><Link to={"/"}><HomeIcon isSelected={true} /></Link></li>
                <li className={"onglet"}><Link to={"/saves"}><SaveIcon isSelected={false} /></Link></li>
                <li className={"onglet"}><a href="#"><SettingsIcon isSelected={false}/></a></li>
            </ul>
        </nav>
    )
}