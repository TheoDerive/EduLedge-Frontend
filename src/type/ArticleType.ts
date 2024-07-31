import {ObjectId} from "mongodb";

export type ArticleType = {
    _id: ObjectId,
    author: string,
    title: string,
    categorie: string,
    content: string,
    image: string,
}

export type NewArticleType = {
    author: string,
    title: string,
    categorie: string,
    content: string,
    image: File | string,
}
