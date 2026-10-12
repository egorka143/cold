import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>M</div>
          <div>
            <div className={styles.logoTitle}>Мебельная фабрика MATRIX</div>
            <div className={styles.logoSub}>с 2008 года</div>
          </div>
        </div>

        <div className={styles.contacts}>
          <div className={styles.contact}>
            <span className={styles.contactLabel}>Москва, Ленинградский пр-т, 31А</span>
            <span className={styles.contactSub}>строение 1, 2 и 3 этаж, павильон Matrix</span>
          </div>
          <div className={styles.phone}>
            <a href="tel:+79859993974" className={styles.phoneLink}>+7 985 999-39-74</a>
            <a href="mailto:corp@matrix-g.ru" className={styles.phoneSub}>corp@matrix-g.ru</a>
          </div>
        </div>
      </div>
    </header>
  );
}