import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app/index";
import { Button } from "antd";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <Button>sdasd</Button>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
