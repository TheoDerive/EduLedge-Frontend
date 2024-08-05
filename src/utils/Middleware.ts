import {BACKEND_URL} from "./VarUtil.tsx";

const Middleware = {
    verifTokens: async (user_id: string) => {
        const data = {
            user_id
        }

        return await fetch(`http://${BACKEND_URL}/middleware/verif-tokens`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    },

    canPass: async (user_id: string) => {
        const data = {
            user_id
        }

        return await fetch(`http://${BACKEND_URL}/middleware/can-pass`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }
}

export default Middleware