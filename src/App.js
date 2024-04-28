import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NoMatch from "./Components/UI/NoMatch/NoMatch";
import Search from "./Components/Search/Search";
import { appContext } from "./appContext";
import useApp from "./hooks/useApp";
import InfoPage from "./Components/InfoPage/InfoPage";

function App() {

  const { houses } = useApp();

  return (
    <appContext.Provider value={{ houses }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/Info" element={<InfoPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </div>
    </appContext.Provider>
  );
}

export default App;