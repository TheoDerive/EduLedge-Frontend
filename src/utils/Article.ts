import {BACKEND_URL} from "./VarUtil.tsx";
import {ArticleType, NewArticleType} from "../type/ArticleType.ts";

const Article = {
    getAllArticle: async () : Promise<ArticleType[]> => {
        return await fetch(`http://${BACKEND_URL}/article/get-all-articles`)
            .then(res => res.json())
            .catch(err => console.error(err));
    },

    // Need Middleware
    newArticle: async (article: NewArticleType) => {
        return await fetch(`http://${BACKEND_URL}/article/new-article`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Indique que le corps est en JSON
            },
            body: JSON.stringify(article)
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    }
}

export default Article