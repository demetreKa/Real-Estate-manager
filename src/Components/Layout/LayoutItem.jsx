/* eslint-disable react/prop-types */
import styles from "./LayoutItem.module.css";
import bed from "../icon/bed.svg";
import vector from "../icon/vector.svg";
import roadIcon from "../icon/roadicon.svg";
function LayoutItem({ house }) {
  return (
    <span className={styles.main}>
      <p className={styles.sold}>
        {house.is_rental <= 0 ? "იყიდება" : "ქირავდება"}
      </p>
      <img src={house.image} alt="" className={styles.imageConteiner} />
      <div className={styles.conteiner}>
        <p className={styles.houseAddress}>{house.price}</p>
        <div>
          <span>
            {" "}
            <i
              className={`fa-solid fa-location-dot fa-sm ${styles.grayColor}`}
            ></i>
            <span>{house.address}</span>
          </span>
        </div>
        <div>
          <span className={styles.center}>
            <img src={bed} alt="" className={styles.svgImg} />
            {house.bedrooms}

            <img src={vector} alt="" />
            {house.area}

            <img src={roadIcon} alt="" />
            {house.zip_code}
          </span>
        </div>
      </div>
    </span>
  );
}

export default LayoutItem;
