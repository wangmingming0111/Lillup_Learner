import "./assets/css/app-styles.css";
import { useMoralis } from "react-moralis";
import { React } from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import Desktop13Page from "views/LillupPage/LearnerExperiencePage/Desktop13Page";
import Desktop14Page from "views/LillupPage/LearnerExperiencePage/Desktop14Page";

var hist = createBrowserHistory();

export default function App() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button
          onClick={() =>
            authenticate({ signingMessage: "Hello, welcome on Lillup" })
          }
        >
          Authenticate
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <Router history={hist}>
        <Switch>
          <Route path="/lillup/learner/experience/desktop-13" component={Desktop13Page} />
          <Route path="/lillup/learner/experience/desktop-14" component={Desktop14Page} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/blog-post" component={BlogPostPage} />
          <Route path="/blog-posts" component={BlogPostsPage} />
          <Route path="/components" component={ComponentsPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/ecommerce-page" component={EcommercePage} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/product-page" component={ProductPage} />
          <Route path="/sections" component={SectionsPage} />
          <Route path="/shopping-cart-page" component={ShoppingCartPage} />
          <Route path="/signup-page" component={SignupPage} />
          <Route path="/error-page" component={ErrorPage} />
          <Route path="/" component={PresentationPage} />
        </Switch>
      </Router>
    </div>
  );
}
