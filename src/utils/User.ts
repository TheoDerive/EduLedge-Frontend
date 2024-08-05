import {BACKEND_URL} from "./VarUtil.tsx";
import {UserConnectionType, UserInscriptionType, UserType} from "../type/UserType.ts";

const User = {
    getUser: async (user_id: string): Promise<UserType> => {
        const data = {
            user_id
        }
        return await fetch(`http://${BACKEND_URL}/user/get-user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    },
    connection: async (user: UserConnectionType) => {
        const data = {
            email: user.email,
            password: user.password,
        }

        return await fetch(`http://${BACKEND_URL}/user/connection`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then( async res => {
                if (res.status === 200) {
                    const result = await res.json().then(res2 => res2)
                    return {
                        status: 200,
                        result
                    }
                }

                return res.json()

            })
            .catch(error => error);
    },
    inscription: async (user: UserInscriptionType) => {
        const data = {
            username: user.username,
            email: user.email,
            password: user.password,
        }

        return await fetch(`http://${BACKEND_URL}/user/new-user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then( async res => {
                if (res.status === 200) {
                    const result = await res.json().then(res2 => res2)
                    return {
                        status: 200,
                        result
                    }
                }

                return res.json()

            })
            .catch(error => error);
    }

}

export default User