import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.row}>
          <p>All pages</p>
          <input type="checkbox"></input>
        </div>
        <div className={styles.line} />
        <div className={styles.row}>
          <p>Page 1</p>
          <input type="checkbox"></input>
        </div>
        <div className={styles.row}>
          <p>Page 2</p>
          <input type="checkbox"></input>
        </div>
        <div className={styles.row}>
          <p>Page 3</p>
          <input type="checkbox"></input>
        </div>
        <div className={styles.row}>
          <p>Page 4</p>
          <input type="checkbox"></input>
        </div>
        <div className={styles.line} />
        <button className={styles.button}>
          Done
        </button>

      </div>
    </main>
  );
}
