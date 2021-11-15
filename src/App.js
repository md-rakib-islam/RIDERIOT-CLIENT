import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthPorvider/AuthProvider";
import About from "./Pages/About/About";
import Purchase from "./Pages/Appointment/Purchase/Purchase ";
import Contact from "./Pages/Contact/Contact";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import Home from "./Pages/Home/Home/Home";
import MoreProduct from "./Pages/Home/MoreProduct/MoreProduct";
import Details from "./Pages/Home/Service/Details/Details";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Nav";
import NotFound from "./Pages/Shared/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Navigation></Navigation>
              <Home />
            </Route>

            <PrivateRoute path="/purchase">
              <Navigation></Navigation>
              <Purchase></Purchase>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard />
              <Footer></Footer>
            </PrivateRoute>

            <Route path="/services">
              <Navigation></Navigation>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route path="/servicesMore">
              <Navigation></Navigation>
              <MoreProduct></MoreProduct>
              <Footer></Footer>
            </Route>
            <Route path="/about">
              <Navigation></Navigation>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/contact">
              <Navigation></Navigation>
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <Route path="/details/:serviceId">
              <Navigation></Navigation>
              <Details></Details>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Navigation></Navigation>
              <Home />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
