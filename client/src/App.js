import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NoMatch from "./Components/UI/NoMatch/NoMatch";
import Search from "./Components/Search/Search";
import { appContext } from "./appContext";
import useApp from "./hooks/useApp";
import InfoPage from "./Components/InfoPage/InfoPage";
import Registro from "./Components/Registro/registro";
import Carrusel from "./Components/Carrusel/carrusel";
import Financiamiento from "./Components/Financiamiento/financiamiento";
import TerminosCondiciones from "./Components/TerminosCondiciones/Terminoscondiciones";
import PropertyPage from "./Components/PropertyPage/PropertyPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import ProtectedRoute from "./Components/UI/ProtectedRoute/ProtectedRoute";


function App() {

  const { user, setUser } = useApp();
/*   const { filteredItems } = useFilter() */
{/* <Route path="/search/:location" element={<Search />} /> */}
  return (
    <appContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrusel" element={<Carrusel />} />
            <Route path="/financiamiento" element={<Financiamiento />} />
            <Route path="/terminoscondiciones" element={<TerminosCondiciones/>} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/search/:city/:bedrooms/:bathrooms/:sqft/:price" element={<Search />} />
            <Route path="/Info" element={<InfoPage />} />
            <Route path="/Property/:id" element={<PropertyPage />} />
            <Route path="*" element={<NoMatch />} />

            <Route 
              path="/perfil" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </div>
    </appContext.Provider>
    
  );
}

export default App;