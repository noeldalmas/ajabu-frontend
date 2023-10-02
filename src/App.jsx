import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import{Routes, Route} from "react-router-dom";
import MainInterface from "./pages/MainInterface";
import Events from "./pages/Events";
import Groups from "./pages/Groups";
import Pages from "./pages/Pages";
import Questions from "./pages/Questions";
import Header from "./components/Header";
import Login from "./pages/Login";
import MainApp from "./pages/MainApp";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<MainApp/>}>
          <Route path="" element={<MainInterface />} />
          <Route path="events" element={<Events />} />
          <Route path="groups" element={<Groups />} />
          <Route path="pages" element={<Pages />} />
          <Route path="questions" element={<Questions />} />
        </Route>

        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
