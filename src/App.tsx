import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import CreateArticle from "./pages/CreateArticle.tsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/create-article" element={<CreateArticle />} />
        </Routes>
    </Router>
  )
}

export default App
