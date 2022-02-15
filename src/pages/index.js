import React from 'react';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <Nav />
      </div>
      <main className={styles.main}>
        <h1>Hello</h1>
      </main>
    </div>
  )
}

module.exports = Home;