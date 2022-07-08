import React from 'react';
import styles from './Nav.module.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className={styles.nav}>
        <a href="#home">Início</a>
        <a href="#news">Notícias</a>
        <a href="#curiosities">Curiosidades</a>
        <a href="#contact-us">Fale Conosco</a>
      </nav>
    );   
    }
}

export default Nav;