import useFetch from "@/hooks/useFetch";
import { Article } from "@/types/articles/CreateArticle";
import styles from "@/styles/ShopPage.module.css";
import Image from "next/image";
import { Button } from "react-bootstrap";

export default function ShopPage() {
  const [articles] = useFetch(
    "http://localhost:5038/api/article/get/all",
    false
  );

  const handleAddToCart = (articleId: string) => {
      console.log(`Added article with ID ${articleId} to cart`);
    };

  return (
    <div className={`${styles.container} d-flex flex-column`}>
      <h1 className={`${styles.heading} align-self-center`}>Shop Page</h1>
      <div className={styles.grid}>
        {articles.map((article: Article) => (
          <div key={article.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src={"/images/placeholder.jpg"}
                alt="Article Image"
                width={320}
                height={200}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                {article.brand} {article.model}
              </h2>
              <p className={styles.cardDescription}>{article.description}</p>
              <p className={styles.cardPrice}>${article.price}</p>
              <p className={styles.cardCategory}>{article.category.name}</p>
              <Button
                variant="primary" className="mt-3"
                onClick={() => handleAddToCart(article.id)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
