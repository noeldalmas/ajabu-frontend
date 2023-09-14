import "@fortawesome/fontawesome-free/css/all.min.css"
import './App.css'
import Header from "./components/Header"
import MainInterface from "./components/MainInterface";

function App() {

  return (
    <div className="flex-col">
      <Header />
      <MainInterface />
    </div>
  );
}

export default App
