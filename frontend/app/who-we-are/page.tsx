import CardImage from "../components/card-image/card_image";
import Card from "../components/card/card";
import Div2Sides from "../components/div-2-sides/div2sides";
import styles from "./who.module.css";
import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <main className="main">
      <div className={styles.headDiv}></div>
      <div className={styles.cardsHolder}>
        <Card icon={"/noun_company.svg"} text1="Founded in" text2="2019" />
        <Card icon={"/noun_Hamburg.svg"} text1="Located in" text2="Hamburg" />
        <Card
          icon={"/noun_Flour.svg"}
          text1="Catering for"
          text2="International Flour Milling Industry"
        />
      </div>

      <div className={styles.sides}>
        <Image
          fill
          src="/worldmap-bread-iStock.jpg"
          alt="worldmap-bread-iStock"
        />
        <div>
          <h1>WHO WE ARE</h1>
          <h2>
            Rexus International is a German company based in Hamburg, the heart
            of the European enzyme manufacturing industry.
          </h2>
          <p>
            The company was founded 2019 by Mr Daniel Wiebe, an international
            enzyme expert in the field of flour treatment. After graduating from
            the University of Göttingen in economics and Arabic sciences, he
            entered the business of enzymes at some of the world’s leading
            companies in this field. He is well-known in the international
            enzyme market after a long successful career and extensive travels,
            mainly to Africa and the Middle East. Fluent in Arabic, English and
            German, he is one of the few people who have implemented and
            developed the idea of flour improvement in the regions. He remains
            active and in direct contact with his customers in the global
            milling market.
          </p>
          <p>
            Rexus International was established with the main target of
            improving the system of the flour improvement field. As the world
            develops on a daily basis, so too do the challenges facing millers
            in producing the best quality flour. At Rexus we ensure to meet our
            customers’ needs by continually developing our strategies and
            technologies.
          </p>
        </div>
      </div>
      <Div2Sides
        title="No matter how far you are, you still can depend on us."
        contentBelowH1={
          <>
            <p>
              Our team of flour experts and international sales representatives
              offer a professional, trusted service and are ready to cooperate
              with you.
            </p>
            <p>
              We are active in several regions and available in more than 22
              countries around the world in Southeast Asia, South America,
              Nigeria, Egypt, Sudan, Oman and Saudi Arabia, etc. We are
              continually working on providing quality flour treatment solutions
              to every mill in the world.
            </p>
          </>
        }
      >
        <div style={{width: '40%'}}></div>
      </Div2Sides>

      {/* <div className={styles.custom}> */}
          <Div2Sides
            title="Let us tell you the story of a sweet Hamburg delicacy – the Franzbrötchen or french roll."
            contentBelowH1={
              <>
                <p>
                  A Franzbrötchen is a sweet roll filled with sugar and cinnamon.
                </p>
                <p>
                  It is a speciality of Hamburg’s cuisine and is often served with
                  coffee and cake or for breakfast.
                </p>
                <p>
                  The name probably harks back to Hamburg’s French period during
                  Napoleon’s reign between 1806–1814.
                </p>
                <p>
                  According to tradition, there was, at that time, an elongated
                  Franzbrot (also Franzbroot, Franschbroot, plural Franzbreud,
                  Franschbreud) that was similar to the baguette. A Hamburg baker is
                  said to have fried a Franzbrot in a pan using fat. This is said to
                  have given rise to today’s Franzbrötchen.
                </p>
              </>
            }
          >
            <CardImage
              src="/franzb-unsplash-markus-spiske.jpg"
              alt="franzb-unsplash-markus-spiske"
              title="A Delicacy"
              subTitle="flour enriched  with REX-Enzymes"
              innerImg="/corissant.png"
              innerSubTitle="High Standard Quality"
            />
          </Div2Sides>
      {/* </div> */}
    </main>
  );
}
