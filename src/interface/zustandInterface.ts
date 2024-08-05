import {ArticleType} from "../type/ArticleType.ts";
import {UserType} from "../type/UserType.ts";

export interface useStoreInterface {
    allArticles: ArticleType[]
    setAllArticles: (articles: ArticleType[]) => void

    user: UserType
    setUser: (user: UserType) => void
}