import Div2Sides from "../components/div-2-sides/div2sides";
import styles from "./guarantee.module.css";
import Card from "../components/card/card";
import Image from "next/image";
import React from "react";

export default function WhoWeArePage() {
  return (
    <main className='main'>
      <div className={styles.headDiv}>
        <h1>Customized flour treatment concepts.</h1>
        <h2>
          Recipe Developments
          <br />
          Flour Analysis
          <br />
          Baking Trials
        </h2>
      </div>
      <div className={styles.cardsHolder}>
        <Card
          icon={"/noun_Research.svg"}
          text1="Flour Analysis"
          text2="Guaranteeing continuous product quality"
        />
        <Card
          icon={"/noun_development.svg"}
          text1="Recipe development"
          text2="Customized flour treatment concepts"
        />
        <Card
          icon={"/noun_solution.svg"}
          text1="Finding solutions"
          text2="Identifying strategies for optimization"
        />
      </div>

      <article className={styles.art}>
        <h1>GUARANTEE – Our Mission</h1>
        <Div2Sides
          title="Customized Flour Treatments."
          contentBelowH1={
            <>
              <p>
                Whether you produce bread, pasta, biscuits or wafers, Rexus
                International develops customized enzyme-based flour treatments
                for these various applications.
              </p>
              <p>
                Our customers can choose whether to use our single enzymes and
                flour additives or our tailor-made premixes.
              </p>

              <p>
                Our products are of the highest quality, of European origin and
                are based on the latest scientific technologies..
              </p>
            </>
          }
        >
          <Image
            width={600}
            height={400}
            src="/REXUS1-iStock.jpg"
            alt="Image"
          />
        </Div2Sides>

        <div className={styles.imgs2}>
          <Image
            width={600}
            height={400}
            src="/REXUS2-iStock.jpg"
            alt="Image"
          />
          <Image
            width={600}
            height={400}
            src="/REXUS3-iStock.jpg"
            alt="Image"
          />
        </div>

        <Div2Sides
          title="Having problems with your flour treatments?"
          contentBelowH1={
            <>
              <p>
                Millers often face difficulties when managing their flour
                treatments in terms of product quality or general service.
                Sometimes the functionality of their supplier’s product changes
                or does not provide the desired quality effect.
              </p>
              <p>
                Millers may experience a lack of technical support or be charged
                unrealistically high prices. In addition, long or delayed
                production periods can cause finical losses in production.
              </p>

              <p>
                At Rexus International we work hard to solve these problems and
                meet all the requirements of our customers to deliver advanced
                flour treatment systems around the globe.
              </p>
            </>
          }
        >
          <>
            <h1>Supporting customers with recipe development.</h1>
            <p>
              At Rexus we offer our customers direct technical support from our
              German flour experts in all types of flour applications to
              identify strategies and solutions for optimization.
            </p>
            <p>
              There are many technical parameters that determine how your flour
              performs in the baking process. We analyse your flour to measure
              all its characteristics (falling number, gluten & ash content,
              dough extensibility, water absorption, etc.). These results show
              us the specific flour weaknesses and allow us to define recipes to
              boost its quality. In baking trials, we fine-tune the recipes even
              further to achieve maximum quality in terms of volume, dough
              properties, oven spring, bread colour, crumb structure, softness,
              shelf life and many more.
            </p>
          </>
        </Div2Sides>

        <div className={styles.imgs2}>
          <Image
            width={600}
            height={400}
            src="/REXUS4-iStock.jpg"
            alt="Image"
          />
          <Image
            width={600}
            height={400}
            src="/REXUS5-iStock.jpg"
            alt="Image"
          />
        </div>

        <Div2Sides
          title="Moving flour treatment to a higher level."
          contentBelowH1={
            <>
              <p>
                Your trusted cooperation paired with our know-how will take your
                flour treatment to a higher level.
              </p>
              <p>
                Our technical department is ready to support and face with you
                your challenge. We will help you to understand your flour and
                find the right solution to maximize your success. We guarantee
                our customers the delivery of fresh products and the individual
                processing of each request.
              </p>

              <p>
                We draw up an annual plan for each customer where we arrange the
                upcoming demand schedules to provide our customers a secure and
                stable supply system. Additionally, we consider the potential
                for additional demand and stock extra volumes to ensure our
                customers avoid any shortages in their production processes.
              </p>
              <p>
                We have developed a simple system to connect directly with our
                customers wherever they are. Our call centre is available 24/7
                to process your requirements, feedback, or any additional
                information. You can also easily send us a message and we will
                contact you asap.
              </p>
            </>
          }
        >
          <Image
            width={600}
            height={400}
            src="/REXUS6-iStock.jpg"
            alt="Image"
          />
        </Div2Sides>
      </article>
      <div className={styles.grad} style={{ color: "#fff" }}>
        <Div2Sides
          title="Quick - Simple & Trusted!"
          contentBelowH1={
            <>
              <p>
                Rexus International provides an efficient production and
                delivery system (quick, simple & trusted) to flexibly meet our
                customers’ requirements.
              </p>
              <p>
                Hamburg harbour is one of the world’s largest and most important
                international shipping hubs, where the headquarters of the
                world’s largest shipping companies (Hapag Lloyd and Hamburg Süd)
                are located. This allows us to easily reach every mill around
                the world with punctual and timely deliveries.
              </p>

              <p>We will help you connect and extend your business.</p>
            </>
          }
        >
          <Image
            width={600}
            height={400}
            src="/Quick-Simple-Trusted-REXUS-International-iStock.jpg"
            alt="Image"
          />
        </Div2Sides>
      </div>
    </main>
  );
}
