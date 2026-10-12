import styles from './Advantages.module.css';

const items = [
  {
    title: 'Делаем пилотные номера по себестоимости',
    text: 'демонстрационный образец в чистовых работах',
  },
  {
    title: 'Работаем под ключ: проектировщик, закупщик',
    text: 'поставщики, клининг, приемка в монтажа',
  },
  {
    title: 'Решаем вопросы с инженерами и другими подрядчиками',
    text: 'без вашего участия',
  },
];

export default function Advantages() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Комплектуем гостиничные номера мебелью и текстилем под ключ
        </h2>

        <p className={styles.text}>
          Сдаем вовремя и укладываемся в бюджет. Повышаем загрузку отеля за счет снижения ADR и RevPar.
          Снижаем стоимость эксплуатации номеров.
        </p>

        <div className={styles.grid}>
          {items.map((it, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.icon}>✓</div>
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardText}>{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}