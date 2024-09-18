/* eslint-disable react/prop-types */
import LayoutItem from "./LayoutItem";
import styles from "./LayoutList.module.css";
function LayoutList({ data }) {
  return (
    <div className={styles.conteiner}>
      {data.map((house) => (
        <LayoutItem key={house.id} house={house} />
      ))}
    </div>
  );
}

export default LayoutList;
