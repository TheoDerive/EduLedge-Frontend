import Navbar from "../component/Navbar.tsx";
import {useEffect, useState} from "react";

export default function Homepage() {
    const [bigArticle, setBigArticle] = useState<>();

    useEffect(() => {

    })

    return (
        <>
            <Navbar />
            <p>Homepage</p>
        </>
    )
}