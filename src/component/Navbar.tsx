import {HomeIcon, SaveIcon, SettingsIcon, TokensIcon} from "./Icon.tsx";
import {useStore} from "../hooks/useStore.ts";

export default function Navbar() {
    const {user} = useStore()

    return (
        <nav className={"navbar-desktop"}>
            <ul className={"onglet-container"}>
                <li className={"tokens-limit"}><TokensIcon /> <p>{user.tokens}</p></li>
                <li className={"onglet"}><a href="#"><HomeIcon isSelected={true} /></a></li>
                <li className={"onglet"}><a href="#"><SaveIcon isSelected={false} /></a></li>
                <li className={"onglet"}><a href="#"><SettingsIcon isSelected={false}/></a></li>
            </ul>
        </nav>
    )
}