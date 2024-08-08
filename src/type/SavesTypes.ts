import {ObjectId} from "mongodb";

export type Save = ObjectId[]

export type NewSave = {
    user_id: ObjectId,
    article: ObjectId
}