/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LayoutItem from "./LayoutItem";
import styles from "./LayoutList.module.css";
function LayoutList({ data, setHouseid }) {
  return (
    <Link to="chosenHouse">
      <div className={styles.conteiner}>
        {data.map((house) => (
          <LayoutItem key={house.id} house={house} setHouseid={setHouseid} />
        ))}
      </div>
    </Link>
  );
}

export default LayoutList;
