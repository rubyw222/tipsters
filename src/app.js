import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

// components
import Ladder from "./components/ladder/ladder";
import Account from "./components/account/account";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login";
import NavBar from "./components/navbar";
import NotFound from './components/notFound';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Ladder/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;