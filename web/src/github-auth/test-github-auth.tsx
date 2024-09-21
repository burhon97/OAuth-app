function SignInWithGitHub() {
  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:3000/auth/github";
  };

  return <button onClick={handleGitHubLogin}>Sign in with GitHub</button>;
}
