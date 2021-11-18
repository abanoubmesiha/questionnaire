import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './components/home';
import Questionnaire from './components/questionnaire';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.sass';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Container fluid>
          <Route path="/" exact component={Home} />
          <Route path="/generate-business-plan" component={Questionnaire} />
        </Container>
        <Home />
      </Switch>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
