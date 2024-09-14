import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './Styles/App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;

