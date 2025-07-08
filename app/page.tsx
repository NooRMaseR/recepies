import CardImage from "./components/card-image/card_image";
import Carousel from "./components/carousel/carousel";
import Card from "./components/card/card";
import styles from "./page.module.css";
import React from "react";
import PolygonCard from "./components/polygon-card/polygon-card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel
        items={[
          {
            src: "/img1.png",
            alt: "img1",
            textChildren: <h1>Big Image 1</h1>,
          },
          {
            src: "/img2.jpg",
            alt: "img2",
            textChildren: <h1>Big Image 2</h1>,
          },
          {
            src: "/img3.jpg",
            alt: "img3",
            textChildren: <h1>Big Image 3</h1>,
          },
        ]}
      />

      <div className={styles.cardsHolder}>
        <Card icon={"/noun_support.svg"} text1="text 1" text2="sub text" />
        <Card icon={"/noun_Science.svg"} text1="text 2" text2="sub text" />
        <Card icon={"/noun_Shipping.svg"} text1="text 3" text2="sub text" />
      </div>

      <div className={styles.grad}>
        <h1>Rexus International welcomes you to explore our enzyme world.</h1>
        <div className={styles.gradInner}>
          <div className={styles.cardInner}>
            <h3>
              We are the German partner of the international milling industry,
              providing qualified solutions worldwide for the treatment of
              flour.
            </h3>
            <div>
              <p>
                Our passion is supporting our customers in the best way with our
                know-how in the standardization, optimization, and fortification
                of flour.
              </p>
              <p>
                It is the daily challenge of every miller to produce the best
                flour with consistent quality standards.
              </p>
            </div>
          </div>

          <div className={styles.cardInner}>
            <h3>
              Is your flour to be used in bakeries, pasta production or biscuit
              manufacturing?
            </h3>
            <div>
              <p>Then our Rexus product range is the best solution for you.</p>
              <p>
                Rexus International offers you a full range of single enzymes
                and other functional ingredients. Based on our know-how we
                develop tailor-made flour improver compounds from specific
                combinations of enzymes and other ingredients. Through our
                comprehensive service and consultation, we help you achieve the
                required quality in bread, pasta, and biscuits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className={styles.longH1}>
        We help you achieve the required quality in bread, pasta, and biscuits.
      </h1>

      <div className={styles.cardsHolder2}>
        <CardImage
          src="/bread.jpg"
          alt="Berad"
          title="Best Flour"
          subTitle="Fresh Bread"
          innerImg="/noun_Bread_white.png"
          innerSubTitle="Daily staple Food"
        />
        <CardImage
          src="/pastry.jpg"
          alt="pastry"
          title="Finest Flour"
          subTitle="Best Biscuits, Wafers &  Pastries"
          innerImg="/noun_Macarons.png"
          innerSubTitle="Luxuries for the Cake Tray"
        />
        <CardImage
          src="/pasta-food.jpg"
          alt="pasta-food"
          title="Special Flour"
          subTitle="Delicious Pasta"
          innerImg="/noun-Pasta-white-1.png"
          innerSubTitle="Daily staple Food"
        />
      </div>

      <div className={styles.enzymesInfo}>
        <div>
          <h1>Let us tell you a short story about the potential of enzymes.</h1>
          <p>
            Flour is the key ingredient in bread, and has been one of life&#39;s
            elixirs for many cultures throughout human history. The milling
            wheat culture has existed for thousands of years and has
            significantly supported human development. Flour has meant life for
            many cultures. Today, more than 5,000 mills around the world produce
            around 450 million tons of flour annually. The natural fluctuating
            quality of flour is a daily challenge for every miller.
          </p>
        </div>
        <div>
          <p>
            Nowadays, the addition of high-tech enzyme preparations plays an
            important role in flour production and its improvement. Enzymes are
            natural proteins that catalyse biological reactions. This helps the
            industry achieve flour standardization by producing flours with
            improved, consistent baking properties. Most enzyme production
            worldwide is based in Europe, mainly in Germany, Denmark, and
            France. Globalization has made enzyme-based flour improvers
            available around the world, but their key ingredients are most often
            produced in the European enzyme hub.
          </p>
        </div>
      </div>

      <div className={styles.productRangeH1}>
        <h1>Please have a look at our Rexus product range.</h1>
        <div className={styles.pol1}>
          <PolygonCard icon="/noun_enzymatic.svg" text="Concentrated Enzymes" />
          <PolygonCard icon="/noun_Chemistry.svg" text="Enzyme Complexes" />
          <PolygonCard icon="/noun_Enhance.svg" text="Flour Enhancements" />
          <PolygonCard icon="/pasta-compo-noun_conchille.svg" text="Pasta Improvers & Colorants" />
        </div>
          <div className={styles.pol2}>
            <PolygonCard icon="/noun_wafer.svg" text="Biscuits & Wafers" />
            <PolygonCard icon="/fortification-noun_Nutraceuticalsvg.svg" text="Flour Fortification" />
          </div>
      </div>

      <div className={styles.bekaryDiv}>
        <h1>
          Rexus international offers its customers a complete enzyme product
          range produced in the European Union.
        </h1>
        <h2>
          We promise to deliver the purest, most trusted and best functioning
          enzyme technology.
        </h2>
      </div>
    </main>
  );
}
