import './App.css';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from './components/NavigationBar'
import BitFaceCard from './components/BitFaceCard';
import Footer from './components/Footer'

function App() {
  return (
    <Container className="App" fluid="md">
      <NavigationBar />
      <Container className="Splash Section" fluid="md">
        <Row>
          <Col><BitFaceCard /></Col>
          <Col><BitFaceCard /></Col>
          <Col><BitFaceCard /></Col>
        </Row>
      </Container>
      <Container className="AboutUs Section" fluid="md">
        <Row>
          <Col>About Project</Col>
        </Row>
      </Container>
      <Container className="HowTo Section" fluid="md">
        <Row>
          <Col>How to mint a BitFace!</Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
