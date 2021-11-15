import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return <Loading value={progress} />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
