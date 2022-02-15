import React from 'react'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

const about = () => {
  return (
    <div>
      <div className={styles.container}>
        <Nav />
      </div>
      <main className={styles.main}>
        <h1>about</h1>
      </main>
    </div>
  )
}

export default about;