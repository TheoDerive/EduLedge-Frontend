import {ScienceIcon, TechIcon} from "../component/Icon.tsx";
import {CategorieType} from "../type/UtilsType.ts";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
export const CATEGORIES: CategorieType[] = [
    {
        name: "Science",
        icon: <ScienceIcon />
    },
    {
        name: "Tech",
        icon: <TechIcon />
    },
]