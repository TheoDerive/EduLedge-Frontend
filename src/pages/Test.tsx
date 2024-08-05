import {CATEGORIES} from "../utils/VarUtil.tsx";
import ArticlesFiltered from "../component/ArticlesFiltered.tsx";
import {CategorieType} from "../type/UtilsType.ts";

export default function Test(){

    return (
        <>
            {
                    CATEGORIES.map((categorie: CategorieType) =>
                        <ArticlesFiltered categorie={categorie} />
                    )
            }
        </>
    )
}