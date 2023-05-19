import { useDispatch } from "react-redux";
import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import React, { useState, useEffect } from "react";
import { InstagramRouter } from "./InstagramRouter";
import { db, firebase } from "../Database/firebase";
import { setProfile, signIn } from "../Actions/auth";
import { InstagramPreloader } from "../Components/InstagramPreloader";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(signIn(user.uid, user.displayName));
        setIsLoggedIn(true);

        db.collection("users")
          .where("id", "==", user.uid)
          .get()
          .then((querySnapshot) =>
            querySnapshot.forEach((doc) => {
              dispatch(setProfile(doc.data(), doc.id));
            })
          )
          .catch((error) => console.log("Error getting document:", error));
      } else {
        setIsLoggedIn(false);
      }

      setTimeout(() => setChecking(false), 1500);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) return <InstagramPreloader />;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={true}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRoute
            isAuthenticated={true}
            path="/"
            component={InstagramRouter}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
