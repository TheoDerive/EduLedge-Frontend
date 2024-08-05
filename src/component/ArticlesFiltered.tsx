import {ArticleType} from "../type/ArticleType.ts";
import ArticleComponent from "./ArticleComponent.tsx";
import {useStore} from "../hooks/useStore.ts";
import {useEffect, useState} from "react";
import {CategorieType} from "../type/UtilsType.ts";

export default function ArticlesFiltered({categorie} : {categorie: CategorieType}) {
    const [articlesValids, setArticlesValids] = useState<ArticleType[]>([]);

    const {allArticles} = useStore();

    useEffect(() => {
        const categorieFilter = allArticles.filter((article) => article.categorie === categorie.name)
        setArticlesValids(categorieFilter)

    }, [allArticles]);

    return (
        <section className={"articles-filtered-section"}>
            <h3>{categorie.name} <span className={"article-filtered-icon"}>{categorie.icon}</span></h3>

            <section className="articles-filtered-container">
                <section className={"articles-filtered"}>
                    {
                        articlesValids.map((article, i) => <ArticleComponent key={i} article={article} />)
                    }
                </section>
            </section>
        </section>
    )
}