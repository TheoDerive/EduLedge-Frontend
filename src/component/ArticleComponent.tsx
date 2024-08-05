import {ArticleType} from "../type/ArticleType.ts";
import {StarsIcon} from "./Icon.tsx";
import {useState} from "react";

export default function ArticleComponent({ article } : { article: ArticleType }) {
    const [isSaved, setIsSaved] = useState<boolean>(false);

    function save(){
        setIsSaved(!isSaved)

        // TODO: Ajouter les saves dans la db ou le localStorage
    }

    return (
        <article className={"article-component"}>
            <div className={"article-component-image-container"}>
                <img className={"article-component-image"} src={article.image} alt={`image ${article.title}`}/>
            </div>

            <div onClick={() => save()} className={"article-component-save-container"}>
                <StarsIcon isSelected={isSaved}/>
            </div>

            <div className={"article-component-info-container"}>
                <a href=" " className={"article-component-title"}><strong>{article.title}</strong></a>

                <section className={"article-component-ca"}>
                <span className={"article-component-author"}><strong>{article.author}</strong></span>
                    <span className={"article-component-categorie"}><strong>{article.categorie}</strong></span>
                </section>

            </div>
        </article>
    )
}