import React, { Suspense } from "react";
import Home from "./components/Restaurant/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
