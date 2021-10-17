import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => (
  <div>
    <Header />
    <main className="py-3">
      <Container>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
      </Container>
    </main>
    <Footer />
  </div>
);

export default App;
