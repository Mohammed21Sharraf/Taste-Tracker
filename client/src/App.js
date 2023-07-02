import React, { Suspense, useEffect } from "react";
import Home from "./components/Restaurant/Home/Home";
import Reservation from "./components/Restaurant/Reservation/Reservation";
import Form from "./components/Restaurant/Home/Form/Form";
import Login from "./components/Restaurant/Home/Login/Login";
import Customer from "./components/Restaurant/Customer/Customer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ranking from "./components/Restaurant/Ranking/Ranking";
import Profile from "../src/components/Restaurant/Profile/Profile";
import store from "./store";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./features/user/userSlice";

function App() {
  // const { user } = useSelector((store) => store.user);

  // useEffect(() => {
  //   // store.dispatch(loadUser());
  // });

  return (
    <Suspense>
      <Router>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/form" Component={Form} />
          <Route exact path="/restaurant/dashboard" Component={Home} />

          <Route exact path="/restaurant/reservation" Component={Reservation} />

          <Route exact path="/restaurant/customer" Component={Customer} />
          <Route exact path="/restaurant/ranking" Component={Ranking} />
          <Route exact path="/restaurant/profile" Component={Profile} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
