import Image from 'next/image';
import styles from './styles.module.css';

const images = [
  '/foto 6.jpg',
  '/foto 7.jpeg',
  '/foto 10.jpg',
  '/foto 12.jpg',
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heart}></div>
      <h1 className={styles.title}>TEAMO MOZIN!!!</h1>
      <div className={styles.imagesContainer}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image src={src} alt={`Image ${index + 1}`} width={300} height={300} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
}