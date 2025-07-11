import styles from "../page.module.css";
import PolygonCard from "../components/polygon-card/polygon-card";

export default function ProdutcsPage() {
  return (
    <div className={styles.productRangeH1}>
      <h1>Please have a look at our Rexus product range.</h1>
      <div className={styles.pol1}>
        <PolygonCard
          icon="/noun_enzymatic.svg"
          text="Concentrated Enzymes"
          url="concentrated-enzymes"
        />
        <PolygonCard
          icon="/noun_Chemistry.svg"
          text="Enzyme Complexes"
          url="enzyme-complexes"
        />
        <PolygonCard
          icon="/noun_Enhance.svg"
          text="Flour Enhancements"
          url="flour-enhancements"
        />
        <PolygonCard
          icon="/pasta-compo-noun_conchille.svg"
          text="Pasta Improvers & Colorants"
          url="pasta-improvers-colorants"
        />
      </div>
      <div className={styles.pol2}>
        <PolygonCard
          icon="/noun_wafer.svg"
          text="Biscuits & Wafers"
          url="biscuits-wafers"
        />
        <PolygonCard
          icon="/fortification-noun_Nutraceuticalsvg.svg"
          text="Flour Fortification"
          url="flour-fortification"
        />
      </div>
    </div>
  );
}
