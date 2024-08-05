import Navbar from "../component/Navbar.tsx";
import {useEffect, useRef, useState} from "react";
import {ArticleType} from "../type/ArticleType.ts";
import BigArticle from "../component/BigArticle.tsx";
import {CATEGORIES} from "../utils/VarUtil.tsx";
import ArticlesFiltered from "../component/ArticlesFiltered.tsx";
import {useStore} from "../hooks/useStore.ts";
import {CategorieType} from "../type/UtilsType.ts";

export default function Homepage() {
    const [bigArticle, setBigArticle] = useState<ArticleType[]>([]);
    const bigArticleContainer = useRef<HTMLElement>(null);

    const {allArticles} = useStore()

    useEffect(() => {
        setBigArticle(allArticles.slice(0, 3))
    }, [allArticles]);


    useEffect(() => {
        if(!bigArticleContainer.current) return;

        let n = 1

        const interval = setInterval(() => {
            if(n != 3) {
                bigArticleContainer.current!.style.transform = `translateX(-${n * 100}vw)`;
                n++
            }else {
                bigArticleContainer.current!.style.transform = `translateX(-0vw)`;
                n = 1
            }
        }, 5000)

        return () => clearInterval(interval)
    }, []);

    return (
        <>
            <Navbar />
            <section ref={bigArticleContainer} className={"big-article-container"}>
                {
                    bigArticle ?
                        bigArticle.map((article, i) => <BigArticle key={i} bigArticle={article} /> )
                        :
                        null
                }
            </section>

            <section className="articles-filtered-by-categories">
                {
                    CATEGORIES.map((categorie: CategorieType, i: number) =>
                        <ArticlesFiltered key={i} categorie={categorie} />
                    )
                }
            </section>
        </>
    )
}