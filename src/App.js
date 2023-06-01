import logo from "./logo.svg";
import "./App.css";
import FormClassComponent from "./components/FormClassComponent/FormClassComponent";
import FormFunctionComponent from "./components/FormFunctionComponent/FormFunctionComponent";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="App">
        <p>choose one 👇🏼</p>
        <nav>
          <Link to="/function">Function</Link>
          <br />
          <Link to="/class">Class</Link>
        </nav>
        <Routes>
          <Route path="/function" element={<FormFunctionComponent />} />
          <Route path="/class" element={<FormClassComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
