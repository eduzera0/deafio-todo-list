import styles from './Footer.module.css';
import { AirplaneTakeoff } from 'phosphor-react';

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.redes}>
        <h3><a href='https://www.linkedin.com/in/eduardo-augusto-moretto-2a71a21b2/'>LindekIn</a></h3>
        <h3><a href='https://github.com/eduzera0'>Github</a></h3>
      </div>
    </div>
  )
}
