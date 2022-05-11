import styles from "./../styles/carList.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function carList({ Cars }) {
  const carListBox = Cars.map((c, i) => (
    <div className="carListBox" key={i}>
      <img className="image" src={c.photo} />
      <p>BMW {c.model}</p>
      <p>{c.year}</p>
      <p>{c.price}</p>
    </div>
  ));

  return (
    <div className={styles.catalog}>
      <div className={styles.categories}>
        <h1>Ordenar por:</h1>
        <Button onClick>
          {" "}
          <Link to="/pages/yearOrder">Ano</Link>{" "}
        </Button>
        <Button onClick>
          {" "}
          <Link to="/pages/priceOrder">Preço</Link>{" "}
        </Button>
      </div>
      <div className="tittleContainer">{carListBox}</div>
    </div>
  );
}
