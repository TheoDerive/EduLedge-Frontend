import {create} from "zustand";
import * as Mongoose from "mongoose";

import {useStoreInterface} from "../interface/zustandInterface.ts";
import {ArticleType} from "../type/ArticleType.ts";
import {UserType} from "../type/UserType.ts";

export const useStore = create<useStoreInterface>((set) => ({
    allArticles: [],
    setAllArticles: (allArticles: ArticleType[]) => set({allArticles}),

    allSaves: [],
    setAllSaves: (allSaves: ArticleType[]) => set({allSaves}),

    user: {
        _id: new Mongoose.Types.ObjectId(),
        username: "",
        email: "",
        is_sub: false,
        last_tokens_used: "",
        tokens: 0,
        password: ""
    },
    setUser: (user: UserType) => set({user})
}))