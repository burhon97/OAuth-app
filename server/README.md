# Server Sing In With Google and Github

This is the server part of the sing in with Google and Github example.

## Installation

Get the directory `cd server` and install the dependencies:

```bash
npm install
```

## Configuration

### Google OAuth credentials

Create a Google client ID and client secret:

1. Go to [Google Developer Console](https://console.developers.google.com)
2. Click `Create a new project` or select an existing project.
3. Click `CONFIGURE CONSENT SCREEN`.
4. Select `External` from User Type.
5. Fill App information and Developer contact information fields:
   - Fill `App name` (App information)
   - Select `User support` email (App information)
   - Fill `Email address` (Developer contact information)
6. Click `SAVE AND CONTINUE`.
7. Click `SAVE AND CONTINUE` in `Scopes` section.
8. Click `ADD USERS` button from `Test users` section and add the user email.
9. CLick `SAVE AND CONTINUE`.
10. In the sidebar under `APIs & Services`, select `Credentials`.
11. Select the `Create credentials` drop-down list, and choose `OAuth client ID`.
12. Under `Application type`, select `Web application`.
13. In `Authorized redirect URI` use `http://localhost:5005/auth/google/callback`.
14. Click the `Create` button and copy the generated `client ID` to `GOOGLE_CLIENT_ID` and `client secret` to `GOOGLE_CLIENT_SECRET` environment variables.

### Github OAuth credentials

Create a Github client ID and client secret:

## Running the Server

Compile the server:

```bash
npm run compile
```

Start the server:

```bash
npm start
```
