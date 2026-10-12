import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden />
      <div className={styles.inner}>
        <h1 className={styles.title}>MATRIX</h1>
        <p className={styles.subtitle}>
          Matrix produces furniture for designer interiors in the mid-up and premium segments.
        </p>

        <div className={styles.tags}>
          <span className={styles.tag}>В Россию</span>
          <span className={styles.tag}>В ОАЭ</span>
          <span className={styles.tag}>На Кипр</span>
        </div>

        <div className={styles.badge}>
          <div className={styles.badgeLogo}>G</div>
          <div className={styles.badgeRow}>
            <span>UI</span>
            <span>UX</span>
          </div>
          <div className={styles.badgeBottom}>Landing page</div>
        </div>

        <div className={styles.meta}>
          <div>
            <div className={styles.metaLabel}>August</div>
            <div className={styles.metaValue}>2026</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Furniture factory</div>
          </div>
        </div>
      </div>
    </section>
  );
}