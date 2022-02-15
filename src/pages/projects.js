import React from 'react'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

const projects = () => {
  return (
    <div>
      <div className={styles.container}>
        <Nav />
      </div>
      <main className={styles.main}>
        <h1>projects</h1>
      </main>
    </div>
  )
}

export default projects;