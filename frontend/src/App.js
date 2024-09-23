import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
			<h1>Issue Tracker</h1>
        </header>
        <div className="app-body">
          <nav className="navbar">
            <ul>
				<li><Link to="/create">Create Issue</Link></li>
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
