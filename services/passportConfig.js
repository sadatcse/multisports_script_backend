import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User from '../app/modules/User/Users.model';

passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL, // e.g. http://localhost:5000/api/auth/google/callback
    },
    async (token, tokenSecret, profile, done) => {
      try {
        const { email, name, photos } = profile._json;
  
        // Check if user exists
        let user = await User.findOne({ email });
  
        if (!user) {
          // If user doesn't exist, don't proceed with login
          return done(null, false, { message: 'User not found. Please sign up.' });
        }
  
        // Continue if user is found
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  ));
  

  passport.use(new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL, // e.g. http://localhost:5000/api/auth/facebook/callback
      profileFields: ['id', 'displayName', 'email', 'photos'],
    },
    async (token, tokenSecret, profile, done) => {
      try {
        const { email, name, photos } = profile._json;
  
        // Check if user exists
        let user = await User.findOne({ email });
  
        if (!user) {
          // If user doesn't exist, don't proceed with login
          return done(null, false, { message: 'User not found. Please sign up.' });
        }
  
        // Continue if user is found
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  ));
