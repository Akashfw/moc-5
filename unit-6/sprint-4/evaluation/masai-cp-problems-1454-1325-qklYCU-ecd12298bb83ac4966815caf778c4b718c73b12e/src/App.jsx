import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './Pages/Home'
import BookDetailsPage from './Pages/BookDetailsPage'
import SectionPage from './Pages/SectionPage'
import InvalidPage from './Pages/InvalidPage'
function App() {
  return ( <div className="App">
      < AllRoutes/>
  </div>
  )
}

export default App;
