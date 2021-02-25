import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Component
import MainNavbar from "./Navigation/MainNavbar";
//Pages
import Calendar from "./Pages/Calendar";
import Home from "./Pages/Home";
import Leaderboard from "./Pages/Leaderboard";
import Membership from "./Pages/Membership";
import Settings from "./Pages/Settings";
import Students from "./Pages/Students";

export default function App() {
  return (
    <Router>
      <div classname="app">
        <Switch>
          <Route path="/students">
            <MainNavbar />
            <Students />
          </Route>
          <Route path="/leaderboard">
            <MainNavbar />
            <Leaderboard />
          </Route>
          <Route path="/calendar">
            <MainNavbar />
            <Calendar />
          </Route>
          <Route path="/settings">
            <MainNavbar />
            <Settings />
          </Route>
          <Route path="/membership">
            <MainNavbar />
            <Membership />
          </Route>
          <Route path="/">
            <MainNavbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
