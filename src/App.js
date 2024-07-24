import React from "react";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigate>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <Route path="/" component={Login}/>
        </Navigate>
      </Router>
    </AuthProvider>
  );
}

export default App;
