import React from "react";
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>Curiosidades sobre Tecnologia</h1>
        <p>Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar</p>
      </header>
    );
  }
}

export default Header;