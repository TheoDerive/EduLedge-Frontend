import React, {ChangeEvent, useEffect, useRef, useState} from "react";

import {UserConnectionType, UserInscriptionType} from "../type/UserType.ts";
import BigArticle from "../component/BigArticle.tsx";
import {ArticleType} from "../type/ArticleType.ts";
import {useStore} from "../hooks/useStore.ts";
import {ArrowIcon, EmailIcon, PasswordIcon, UserIcon} from "../component/Icon.tsx";
import User from "../utils/User.ts";
import {useNavigate} from "react-router-dom";

export default function Logpage(){
    const [isLogin, setIsLoggedIn] = useState(true);

    return (
        <>
            {
                isLogin ?
                    <Login setIsLoggedIn={setIsLoggedIn}/>
                    :
                    <Signin setIsLoggedIn={setIsLoggedIn}/>
            }
        </>
    )
}

export function Login({ setIsLoggedIn } : { setIsLoggedIn : (bool: boolean) => void }) {
    const [userVar, setUserVar] = useState<UserConnectionType>({
        email: "",
        password: ""
    });
    const [bigArticle, setBigArticle] = useState<ArticleType[]>([]);
    const bigArticleContainer = useRef<HTMLElement>(null);
    const [erreur, setErreur] = useState({
        field: "",
        message: "Veuillez entre votre adresse email"
    })

    const {allArticles, setUser} = useStore()
    const navigate = useNavigate()

    useEffect(() => {
        setBigArticle(allArticles.slice(0, 3))
    }, [allArticles]);


    useEffect(() => {
        if(!bigArticleContainer.current) return;

        let n = 1

        const interval = setInterval(() => {
            if(n != 3) {
                bigArticleContainer.current!.style.transform = `translateX(-${n * 50}vw)`;
                n++
            }else {
                bigArticleContainer.current!.style.transform = `translateX(-0)`;
                n = 1
            }
        }, 5000)

        return () => clearInterval(interval)
    }, []);

    function changeValue(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        setUserVar({...userVar, [name]: value});
    }

    function sendLogin(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault()

        if (userVar.email === "" || !userVar.email.includes('@')){
            setErreur(({
                field: "email",
                message: "Veuillez entrer votre email",
            }))
            return
        }

        if (userVar.password.length < 8){
            setErreur(({
                field: "password",
                message: "Veuillez entrer un mot de passe d'une longeur de 8 caracteres",
            }))
            return
        }

        setErreur({
            field: "",
            message: ""
        })

        User.connection(userVar).then(res => {
            if (res.status === 200) {
                setUser(res.result)
                navigate("/")
            }

            const message: string = res.message
            if (message.includes("email")){
                setErreur(({
                    field: "email",
                    message,
                }))
                return
            }

            if (message.includes("Mot de passe")){
                setErreur(({
                    field: "password",
                    message,
                }))
                return
            }
        })
    }

    return (
        <section className={"login-container"}>
            <section className="login-left">
                <section className={"login-top"}>
                    <h1 className={"login-title"}>Vous etes de retour !</h1>
                    <p className={"login-sub-title"}>Vous pouvez vous connecter avec votre compte</p>
                </section>

                <form className={"login-form"}>
                    <div className="input-container">
                        <input value={userVar.email} placeholder={"Email"} required onChange={(e) => changeValue(e)}
                               name={"email"} type="email"
                               className={erreur.field === "email" ? 'input-erreur' : undefined}/>

                        <span className={`user-icon ${erreur.field === "email" ? "icon-erreur" : null}`}><EmailIcon/></span>
                    </div>
                    {
                        erreur.field === "email" ?
                            <p className="erreur">{erreur.message}</p>
                            :
                            null
                    }


                    <div className="input-container">
                        <input value={userVar.password} onChange={(e) => changeValue(e)} required placeholder={"Mot de passe"}
                               name={"password"} type="password"
                               className={erreur.field === "password" ? 'input-erreur' : undefined}/>

                        <span className={`user-icon ${erreur.field === "password" ? "icon-erreur" : null}`}><PasswordIcon /></span>
                    </div>
                    {
                        erreur.field === "password" ?
                            <p className="erreur">{erreur.message}</p>
                            :
                            null
                    }


                    <a href="#">Vous avez oublier votre mot de passe ?</a>

                    <button onClick={(e) => sendLogin(e)} type={"submit"} className="login-form-valid">Se connecter <span className={"arrow-icon"}><ArrowIcon /></span> </button>

                    <p className={"login-signin"} onClick={() => setIsLoggedIn(false)}>Vous n'avez pas de compte ?</p>
                </form>
            </section>

            <section className="login-right">
                <section ref={bigArticleContainer} className={"big-article-container"}>
                    {
                        bigArticle ?
                            bigArticle.map((article, i) => <BigArticle key={i} bigArticle={article}/>)
                            :
                            null
                    }
                </section>
            </section>
        </section>
    )
}

export function Signin({ setIsLoggedIn } : { setIsLoggedIn : (bool: boolean) => void }) {
    const [userVar, setUserVar] = useState<UserInscriptionType>({
        username: "",
        email: "",
        password: ""
    });
    const [erreur, setErreur] = useState({
        field: "",
        message: "Veuillez entre votre adresse email"
    })
    const [bigArticle, setBigArticle] = useState<ArticleType[]>([]);
    const bigArticleContainer = useRef<HTMLElement>(null);

    const {allArticles, setUser} = useStore()

    useEffect(() => {
        setBigArticle(allArticles.slice(0, 3))
    }, [allArticles]);


    useEffect(() => {
        if(!bigArticleContainer.current) return;

        let n = 1

        const interval = setInterval(() => {
            if(n != 3) {
                bigArticleContainer.current!.style.transform = `translateX(-${n * 50}vw)`;
                n++
            }else {
                bigArticleContainer.current!.style.transform = `translateX(-0)`;
                n = 1
            }
        }, 5000)

        return () => clearInterval(interval)
    }, []);

    function changeValue(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        setUserVar({...userVar, [name]: value});
    }

    function sendSignin(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault()

        if (userVar.username === ""){
            setErreur(({
                field: "username",
                message: "Veuillez entrer votre pseudo",
            }))
            return
        }

        if (userVar.email === "" || !userVar.email.includes('@')){
            setErreur(({
                field: "email",
                message: "Veuillez entrer votre email",
            }))
            return
        }

        if (userVar.password.length < 8){
            setErreur(({
                field: "password",
                message: "Veuillez entrer un mot de passe d'une longeur de 8 caracteres",
            }))
            return
        }

        setErreur({
            field: "",
            message: ""
        })

        User.inscription(userVar).then(res => {
            console.log(res)
            if (res.status === 200) {
                setUser(res.result)
                return
            }

            const message: string = res.message

            if (message.includes("pseudo")){
                setErreur(({
                    field: "username",
                    message,
                }))
                return
            }

            if (message.includes("mail")){
                setErreur(({
                    field: "email",
                    message,
                }))
                return
            }

            if (message.includes("Mot de passe")){
                setErreur(({
                    field: "password",
                    message,
                }))
                return
            }
        })
    }

    return (
        <section className={"signin-container"}>
            <section className="signin-right">
                <section className={"signin-top"}>
                    <h1 className={"signin-title"}>Bienvenu !</h1>
                    <p className={"signin-sub-title"}>Je vous invite a cree un compte !</p>
                </section>

                <form className={"signin-form"}>
                    <div className="input-container">
                        <input value={userVar.username} placeholder={"Pseudo"} required onChange={(e) => changeValue(e)}
                               name={"username"} type="text"
                               className={erreur.field === "username" ? 'input-erreur' : undefined}/>

                        <span className={`user-icon ${erreur.field === "username" ? "icon-erreur" : null}`}><UserIcon /></span>
                    </div>
                    {
                        erreur.field === "username" ?
                            <p className="erreur">{erreur.message}</p>
                            :
                            null
                    }

                    <div className="input-container">
                        <input value={userVar.email} placeholder={"Email"} required onChange={(e) => changeValue(e)}
                               name={"email"} type="email"
                               className={erreur.field === "email" ? 'input-erreur' : undefined}/>

                        <span className={`user-icon ${erreur.field === "email" ? "icon-erreur" : null}`}><EmailIcon /></span>
                    </div>
                    {
                        erreur.field === "email" ?
                            <p className="erreur">{erreur.message}</p>
                            :
                            null
                    }


                    <div className="input-container">
                        <input value={userVar.password} onChange={(e) => changeValue(e)} required placeholder={"Mot de passe"}
                               name={"password"} type="password"
                               className={erreur.field === "password" ? 'input-erreur' : undefined}/>

                        <span className={`user-icon ${erreur.field === "password" ? "icon-erreur" : null}`}><PasswordIcon /></span>
                    </div>
                    {
                        erreur.field === "password" ?
                            <p className="erreur">{erreur.message}</p>
                            :
                            null
                    }


                    <button onClick={(e) => sendSignin(e)} type={"submit"} className="signin-form-valid">S'inscrire <span className={"arrow-icon"}><ArrowIcon /></span> </button>

                    <p className={"signin-login"} onClick={() => setIsLoggedIn(true)}>Vous avez deja un compte ?</p>
                </form>
            </section>

            <section className="signin-left">
                <section ref={bigArticleContainer} className={"big-article-container"}>
                    {
                        bigArticle ?
                            bigArticle.map((article, i) => <BigArticle key={i} bigArticle={article}/>)
                            :
                            null
                    }
                </section>
            </section>
        </section>
    )
}
