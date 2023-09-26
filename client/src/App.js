import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NoMatch from "./Components/UI/NoMatch/NoMatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;