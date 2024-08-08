import {ArticleType} from "../type/ArticleType.ts";
import {StarsIcon} from "./Icon.tsx";
import {useEffect, useState} from "react";
import Middleware from "../utils/Middleware.ts";
import {useStore} from "../hooks/useStore.ts";
import Saves from "../utils/Saves.ts";

export default function ArticleComponent({ article} : { article: ArticleType}) {
    const [isSaved, setIsSaved] = useState<boolean>(false);

    const {user, allSaves, setAllSaves} = useStore()

    useEffect(() => {
        allSaves.forEach(articleSave => {
            if (article.title === articleSave.title) {
                setIsSaved(true)
            }
        })
    }, []);


    function save(){
        setIsSaved(!isSaved)

        if(!isSaved){
            Middleware.canPass(user._id).then(res => {
                if(res.code === 200) {
                    Saves.saveNewArticle(user._id, article._id)
                        .then(res => console.log(res))

                    Saves.getAllSavesArticles(user._id).then(res => {
                        setAllSaves(res)
                        console.log("recup")
                    })
                }
            })
        }else {
            Saves.removeSaveArticle(user._id, article._id)
                .then(res => console.log('removed'))

            Saves.getAllSavesArticles(user._id).then(res => {
                setAllSaves(res)
                console.log("recup")
            })
        }



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