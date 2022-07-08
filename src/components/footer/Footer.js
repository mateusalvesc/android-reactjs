import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>Site criado por <a href='https://github.com/mateusalvesc' rel='noreferrer' target='_blank'>Mateus Alves Conceição</a> através do canal <a href='https://youtube.com/cursoemvideo/' rel='noreferrer' target='_blank'>CursoemVideo</a>.</p>
      </footer>
    );
  }
}

export default Footer;