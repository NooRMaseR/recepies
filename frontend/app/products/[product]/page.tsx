import { products } from "@/app/shared/shared";
import styles from "./product.module.css";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: keyof typeof products }>;
}) {
  const { product } = await params;
  const data = products[product];

  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <Image src={data.image} alt={product} width={200} height={200} />
        <article>
          <h1>{data.name}</h1>
          <p>{data.describtion}</p>
        </article>
      </div>

      <div className={`${styles.table} ${styles.desktop}`}>
        <section className={styles.tableHead}>
          {Object.keys(data.contant[0]).map((key) => (
            <p key={key}>{key}</p>
          ))}
        </section>
        {data.contant.map((item, idx) => (
          <section key={idx} className={`${styles.tableBody} ${styles.hoverEffect}`}>
            <li>
              <p>{item["Scientific Name"]}</p>
              <p>{item["Product Name"]}</p>
              <ul className={styles.effects}>
                {item.Effects.map((effect, index) => (
                  <li key={index} className={styles.innerEffect}>
                    {effect}
                  </li>
                ))}
              </ul>
            </li>
          </section>
        ))}
      </div>

      <div className={styles.mobile}>
          <div className={`${styles.table}`}>
            {data.contant.map((item, idx) => (
              <div key={idx} className={`${styles.mobileDiv} ${styles.hoverEffect}`}>
                    <div className={styles.mobileContent}>
                        <p>Product Name:</p>
                        <span>{item["Product Name"]}</span>
                    </div>
                    <div className={styles.mobileContent}>
                        <p>Scientific Name:</p>
                        <span>{item["Scientific Name"]}</span>
                    </div>
                    <div className={styles.mobileContent}>
                        <p>Effects:</p>
                        <ul className={styles.effects}>
                        {item.Effects.map((effect, index) => (
                            <li key={index} className={styles.innerEffect}>
                            {effect}
                            </li>
                        ))}
                        </ul>
                    </div>
              </div>
            ))}
          </div>
      </div>
    </main>
  );
}
