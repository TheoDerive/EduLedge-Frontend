import {BACKEND_URL} from "./VarUtil.ts";

const Article = {
    getAllArticle: async () => {
        return fetch(`${BACKEND_URL}article/get-all-articles`)
            .then(res => res.json())
            .catch(err => console.error(err));
    }
}

export default Article