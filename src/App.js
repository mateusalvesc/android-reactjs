import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;