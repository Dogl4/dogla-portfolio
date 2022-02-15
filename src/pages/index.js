import React from 'react';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <main>
        <h1>Hello</h1>
      </main>
    </div>
  )
}

module.exports = Home;