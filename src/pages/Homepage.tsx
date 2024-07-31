import Navbar from "../component/Navbar.tsx";
import {useEffect, useRef, useState} from "react";
import Article from "../utils/Article.ts";
import {ArticleType} from "../type/ArticleType.ts";
import BigArticle from "../component/BigArticle.tsx";

export default function Homepage() {
    const [bigArticle, setBigArticle] = useState<ArticleType[]>([]);

    const bigArticleContainer = useRef<HTMLElement>(null);

    useEffect(() => {
        Article.getAllArticle().then(res => setBigArticle(res.slice(0, 3)))
    }, [])


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
                        bigArticle.map(article => <BigArticle bigArticle={article} /> )
                        :
                        null
                }

            </section>
        </>
    )
}