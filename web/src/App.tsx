import { Route, Routes } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import "./App.css";
import GoogleLogin from "./goog-auth2/google-auth2";

function App() {
  // const handleGoogleLogin = () => {
  //   window.location.href = "http://localhost:5005/auth/google";
  // };

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
              <h1 className="title">OAuth App (Test Demo)</h1>
              {/* <button className="sign-in-button" onClick={handleGoogleLogin}>
                Sign in with Google
              </button> */}
              <GoogleLogin />
              <button className="sign-in-button" onClick={handleGitHubLogin}>
                Sign in with Github
              </button>
            </div>
          }
        />
        <Route
          path="/profile"
          element={<div className="profile">Wellcome to profile User</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
