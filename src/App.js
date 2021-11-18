import React from 'react';
import { Container } from 'reactstrap';
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.sass';

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default App;
