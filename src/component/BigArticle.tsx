import {ArticleType} from "../type/ArticleType.ts";
import {StarsIcon} from "./Icon.tsx";
import {useState} from "react";

export default function BigArticle({bigArticle} : {bigArticle: ArticleType}){
    const [isSaved, setIsSaved] = useState<boolean>(false);

    function save(){
        setIsSaved(!isSaved)

        // TODO: Ajouter les saves dans la db ou le localStorage
    }

    return (
        <section className={"big-article"}>
            <div className={"big-article-image-container"}>
                <img src={bigArticle.image} alt={"big article image"} className={"big-article-image"} />
            </div>

            <div onClick={() => save()} className={"big-article-save-container"}>
                <StarsIcon  isSelected={isSaved} />
            </div>

            <section className={"big-article-info-container"}>
                <section className={"big-article-ca"}>
                    <span className={"big-article-categorie"}><strong>{bigArticle.categorie}</strong></span>
                    <span className={"big-article-author"}><strong>{bigArticle.author}</strong></span>
                </section>

                <h1 className={"big-article-title"}><strong>{bigArticle.title}</strong></h1>

            </section>
        </section>
    )
}