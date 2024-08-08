import {ObjectId} from "mongodb";
import {FindUser} from "../type/UserType.ts";
import {BACKEND_URL} from "./VarUtil.tsx";
import {NewSave} from "../type/SavesTypes.ts";

const Saves = {
    getAllSavesArticles: async (user_id: ObjectId) => {
        const request: FindUser = {
            user_id
        }

        console.log(request)

        return await fetch(`http://${BACKEND_URL}/saves/get-saves-articles`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .catch(err => err)
    },

    saveNewArticle: async (user_id: ObjectId, article_id: ObjectId) => {
        const request: NewSave= {
            user_id,
            article: article_id
        }

        return await fetch(`http://${BACKEND_URL}/saves/new-save-article`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .catch(err => err)
    },

    removeSaveArticle: async (user_id: ObjectId, article_id: ObjectId) => {
        const request: NewSave= {
            user_id,
            article: article_id
        }

        return await fetch(`http://${BACKEND_URL}/saves/remove-save-article`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .catch(err => err)
    }
}

export default Saves
