import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './sidebar';
import Header from './header';

const CommonLayout = ({ children }) => {
  return (
    <div>
      <header style={{ width: '100%', backgroundColor: '#6287ee', padding: '10px', zIndex: '1000', position: 'relative', color: "white" }}>
        <h2>Bill Application</h2>
      </header>
      <Container fluid style={{ display: 'flex', marginTop: '60px' }}>
        <div style={{ position: 'fixed', top: '60px', left: '0', height: '100%', width: '240px' }}>
          <Sidebar />
        </div>
        <div style={{ marginLeft: '240px', width: '100%' }}>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default CommonLayout;