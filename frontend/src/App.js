import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import logo from './logo.svg';
import CreateIssue from "./components/CreateIssue";
// import ReadIssue from "./components/ReadIssue";
// import UpdateIssue from "./components/UpdateIssue";
// import DeleteIssue from "./components/DeleteIssue";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
			<img src={logo} className="app-logo" alt="logo" />
			<h3>Issue Tracker</h3>
        </header>
        <div className="app-body">
          <nav className="navbar">
            <ul>
				<li><NavLink to="/create" activeClassName="active">Create Issue</NavLink></li>
				<li><Link to="/read">Read Issue</Link></li>
				<li><Link to="/update">Update Issue</Link></li>
				<li><Link to="/delete">Delete Issue</Link></li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
				<Route path="/create" element={<CreateIssue/>} />
				{/* <Route path="/read" component={ReadIssue} />
				<Route path="/update" component={UpdateIssue} />
				<Route path="/delete" component={DeleteIssue} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
