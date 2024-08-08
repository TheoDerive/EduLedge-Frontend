import {useStore} from "../hooks/useStore.ts";
import ArticleComponent from "../component/ArticleComponent.tsx";
import {useEffect, useState} from "react";
import Saves from "../utils/Saves.ts";
import {ArticleType} from "../type/ArticleType.ts";

export default function SavesPage(){
    const [articleSaved, setArticleSaved] = useState<ArticleType[]>([]);
    const {allSaves, user, setAllSaves} = useStore()

    useEffect(() => {
        Saves.getAllSavesArticles(user._id).then(res => setArticleSaved(res))
    }, [allSaves]);

    return (
        <section>
            {
                articleSaved.length > 0 &&
                articleSaved.map(article =>
                    <ArticleComponent article={article} />
                )
            }
        </section>
    )
}