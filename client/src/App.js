import React, { Suspense } from "react";
import Home from "./components/Restaurant/Home/Home";
import Reservation from "./components/Restaurant/Reservation/Reservation";
import Login from "./components/Restaurant/Home/Login/Login"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/reservation" Component={Reservation} />
          <Route exact path="/login" Component={Login} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
