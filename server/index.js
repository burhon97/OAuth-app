import express from "express";
import session from "express-session";
import passport from "passport";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "./config.js";
import { Strategy as GitHubStrategy } from "passport-github2";

const app = express();

// Session configuration
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Initialize passport and session handling
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user (required for sessions)
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Configure GitHub strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5005/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // Save user profile in session or database
      // todo logic here

      return done(null, profile);
    }
  )
);

// GitHub authentication route
app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    // After successful login, redirect to the frontend application
    res.redirect("http://localhost:5173/profile"); // Redirect to your frontend URL
  }
);

app.listen(5005, () => {
  console.log("Server is running on http://localhost:5005");
});
