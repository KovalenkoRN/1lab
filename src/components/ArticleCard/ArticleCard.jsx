import styles from './ArticleCard.module.css';

function ArticleCard({ article }) {
  const { title, excerpt, author, date, tag, image } = article;
  return (
    <article className={styles.card}>
  <img 
    src={article.image} 
    alt={article.title} 
    className={styles.image} 
  />
  <div className={styles.content}>
    <span className={styles.tag}>{article.tag}</span>
    <h3 className={styles.title}>{article.title}</h3>
    <p className={styles.excerpt}>{article.excerpt}</p>
    <div className={styles.meta}>
      <span>{article.author}</span>
      <span>{article.date}</span>
    </div>
  </div>
</article>
  );
}

export default ArticleCard;