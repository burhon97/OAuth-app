import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:5005/auth/github";
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="sign-in">
              <h1>Sign in with GitHub (Test Demo)</h1>
              <button className="sign-in-button" onClick={handleGitHubLogin}>
                Sign in with Github
              </button>
            </div>
          }
        />
        <Route
          path="/profile"
          element={<div className="dashboard">Hello User</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
