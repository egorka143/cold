import styles from './Gallery.module.css';

const photos = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png',
  '/images/6.png',
];

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <div key={i} className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Номер ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}