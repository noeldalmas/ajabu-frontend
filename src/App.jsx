import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import{Routes, Route} from "react-router-dom";
import MainInterface from "./pages/MainInterface";
import Events from "./pages/Events";
import Groups from "./pages/Groups";
import Pages from "./pages/Pages";
import Questions from "./pages/Questions";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainInterface />} />
        <Route path="events" element={<Events />} />
        <Route path="groups" element={<Groups />} />
        <Route path="pages" element={<Pages />} />
        <Route path="questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
