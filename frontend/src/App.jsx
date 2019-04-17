import React from 'react';
import styles from './App.module.css';
import ContactCardList from './ContactCardList';

const data = [
  { name: 'Sam', email: 'a@b.com' },
  { name: 'Sam 2', email: 'c@d.com' },
]

export default () => (
  <div className={styles.App}>
    <ContactCardList data={data} />
  </div>
);
