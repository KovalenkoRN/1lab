import styles from './Header.module.css';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>React Blog</h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;