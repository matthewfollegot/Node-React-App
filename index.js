const express = require("express");
const passport = require("passport");
const GoogleStrategy = requrie("passport-google-oauth20").Strategy;
const app = express();

passport.use(new GoogleStrategy());
/*
new GoogleStrategy() creates a new instance of the Google Passport Strategy
passport.use() calls passports attention to a specific service
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT);
