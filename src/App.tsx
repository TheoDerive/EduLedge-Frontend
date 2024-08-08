import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import CreateArticle from "./pages/CreateArticle.tsx";
import Test from "./pages/Test.tsx";
import {useEffect} from "react";
import {useStore} from "./hooks/useStore.ts";
import Article from "./utils/Article.ts";
import Logpage from "./pages/Log.tsx";
import Middleware from "./utils/Middleware.ts";
import SavesPage from "./pages/SavesPage.tsx";
import User from "./utils/User.ts";
import Saves from "./utils/Saves.ts";

function App() {
    const {setAllArticles, user, setUser, setAllSaves} = useStore();

    useEffect(() => {
        if (user.username !== ""){
            Middleware.verifTokens(user._id).then(res => console.log(res))
        }
    }, [user]);

    useEffect(() => {
        const user_id_str = sessionStorage.getItem("user_id")
        if (user_id_str){
            const user_id = JSON.parse(user_id_str)

            User.getUser(user_id).then(res => setUser(res))
            Saves.getAllSavesArticles(user_id).then(res => setAllSaves(res))
        }

        Article.getAllArticle()
            .then(allArticles =>
                setAllArticles(allArticles)
            )
    }, []);

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/connection" element={<Logpage />} />
            <Route path="/create-article" element={<CreateArticle />} />
            <Route path="/saves" element={<SavesPage />} />

            <Route path="/test" element={<Test />} />
        </Routes>
    </Router>
  )
}

export default App
