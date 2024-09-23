import "dotenv/config";
import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { Config } from "./config.js";

const app = express();
const googlecallbackURL = `http://localhost:${Config.port}/auth/google/callback`;
const githubCallbackURL = `http://localhost:${Config.port}/auth/github/callback`;

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

passport.deserializeUser((obj, done) => {
  // @ts-ignore
  done(null, obj);
});

// Configure GitHub strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: Config.github.clientId,
      clientSecret: Config.github.clientSecret,
      callbackURL: githubCallbackURL,
    },
    // @ts-ignore
    (accessToken, refreshToken, profile, done) => {
      // Save user profile in session or database
      // todo logic here

      return done(null, profile);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: Config.google.clientId,
      clientSecret: Config.google.clientSecret,
      callbackURL: googlecallbackURL,
    },
    function (accessToken, refreshToken, profile, done) {
      // Save user profile in session or database
      // todo logic here

      return done(null, profile);
    }
  )
);

// ----------------------------------------------------
// Authentication with Google
// ----------------------------------------------------

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  function (req, res) {
    // Successful authentication, redirect success.
    res.redirect("http://localhost:5173/profile");
  }
);

// ----------------------------------------------------
// Authentication with GitHub
// ----------------------------------------------------

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
