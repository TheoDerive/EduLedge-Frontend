import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import CreateArticle from "./pages/CreateArticle.tsx";
import Test from "./pages/Test.tsx";
import {useEffect} from "react";
import {useStore} from "./hooks/useStore.ts";
import Article from "./utils/Article.ts";
import Logpage from "./pages/Log.tsx";

function App() {
    const {setAllArticles} = useStore();

    useEffect(() => {
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

            <Route path="/test" element={<Test />} />
        </Routes>
    </Router>
  )
}

export default App
