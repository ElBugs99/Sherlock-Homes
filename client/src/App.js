import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NoMatch from "./Components/UI/NoMatch/NoMatch";
import Search from "./Components/Search/Search";
import { appContext } from "./appContext";
import useApp from "./hooks/useApp";
import InfoPage from "./Components/InfoPage/InfoPage";
import useFilter from "./hooks/useFilter";
import Registro from "./Components/Registro/registro";
import Carrusel from "./Components/Carrusel/carrusel";
import Financiamiento from "./Components/Financiamiento/financiamiento";
import PropertyPage from "./Components/PropertyPage/PropertyPage";


function App() {

  const { user } = useApp();
/*   const { filteredItems } = useFilter() */
{/* <Route path="/search/:location" element={<Search />} /> */}
  return (
    <appContext.Provider value={{ user }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrusel" element={<Carrusel />} />
            <Route path="/financiamiento" element={<Financiamiento />} />
            
            <Route path="/registro" element={<Registro />} />
            <Route path="/search" element={<Search />} />
            <Route path="/Info" element={<InfoPage />} />
            <Route path="Property/:id" element={<PropertyPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </div>
    </appContext.Provider>
    
  );
}

export default App;