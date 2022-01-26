// import { Router } from "react-router";
import Header from "./Header";
import About from "./About";
import Users from "./Users";
import Main from "./Main"
import Error from "./Error";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserId from "./UserId";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
      <Header /> {/* for SPA  */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Users/:userName" element={<UserId />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
