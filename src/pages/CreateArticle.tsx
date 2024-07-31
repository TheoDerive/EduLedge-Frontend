import {CATEGORIES} from "../utils/VarUtil.ts";
import {useEffect, useState} from "react";
import { NewArticleType} from "../type/ArticleType.ts";
import Article from "../utils/Article.ts";
import {toDataURL} from "../utils/FunctionUtils.ts";

export default function CreateArticle(){
    const [articleInfo, setArticleInfo] = useState<NewArticleType>({
        title: '',
        content: "",
        image: new File([], ''),
        categorie: '',
        author: ''
    })
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        if(!isReady) return;

        Article.newArticle(articleInfo).then(res=> {
            console.log(res)
            setIsReady(false)
        })

    }, [isReady]);

    function sendNewArticle() {
        if (typeof articleInfo.image === "object"){
            console.log("click")
            toDataURL(URL.createObjectURL(articleInfo.image))
                .then(dataUrl => {
                    if(typeof dataUrl != "string")return

                    setArticleInfo(prev => ({
                        ...prev,
                        image: dataUrl
                    }))

                    setIsReady(true)
                })
                .catch(err => console.log(err));

        }
    }



    return (
        <form>
            <input onChange={(e) => setArticleInfo(prev => ({
                ...prev,
                title: e.target.value,
            }))} value={articleInfo.title} name="title" type="text"/>
            <input onChange={(e) => setArticleInfo(prev => ({
                ...prev,
                content: e.target.value,
            }))} value={articleInfo.content} name="content" type="text"/>
            <input onChange={(e) => setArticleInfo(prev => ({
                ...prev,
                author: e.target.value,
            }))} value={articleInfo.author} name="author" type="text"/>
            <input onChange={(e) => {
                if(!e.target.files) return

                setArticleInfo(prev => ({
                ...prev,
                image: e.target.files![0],
            }))}} name="image" type="file"/>
            <select onChange={(e) => setArticleInfo(prev => ({
                ...prev,
                categorie: e.target.value,
            }))} value={articleInfo.categorie} name="categorie">
                {
                    CATEGORIES.map(c => <option value={c}>{c}</option>)
                }
            </select>

            <button onClick={(e) => {
                e.preventDefault()
                sendNewArticle()
            }}>Send</button>
        </form>
    )
}