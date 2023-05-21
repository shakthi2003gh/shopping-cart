import { Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
