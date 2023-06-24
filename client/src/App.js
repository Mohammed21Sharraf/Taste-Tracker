import React, { Suspense } from "react";
import Home from "./components/Restaurant/Home/Home";
import Reservation from "./components/Restaurant/Reservation/Reservation";
import Form from "./components/Restaurant/Home/Form/Form";
import Login from "./components/Restaurant/Home/Login/Login";  
import Customer from "./components/Restaurant/Customer/Customer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ranking from "./components/Restaurant/Ranking/Ranking";
import Profile from "../src/components/Restaurant/Profile/Profile";

function App() {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/reservation" Component={Reservation} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/form" Component={Form} />
          <Route exact path="/customer" Component={Customer}/>
          <Route exact path="/ranking" Component={Ranking}/>
          <Route exact path="/profile" Component={Profile}/>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
