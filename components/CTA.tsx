import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Рассчитаем стоимость по вашему ТЗ</h2>
        <p className={styles.text}>
          Оставьте заявку — подготовим смету и подберем комплектацию под ваш проект.
        </p>
        <button className={styles.button}>
          Рассчитать стоимость по ТЗ
          <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}