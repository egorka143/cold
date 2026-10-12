import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© 2026 Мебельная фабрика MATRIX</p>
        <nav className={styles.links}>
          <a href="tel:+79859993974">+7 985 999-39-74</a>
          <a href="mailto:corp@matrix-g.ru">corp@matrix-g.ru</a>
        </nav>
      </div>
    </footer>
  );
}