/* eslint-disable react/prop-types */
import styles from "./LayoutItem.module.css";
import bed from "../icon/bed.svg";
import vector from "../icon/vector.svg";
import roadIcon from "../icon/roadicon.svg";
import location from "../icon/location.svg";

function LayoutItem({ house, setHouseid }) {
  const numberFormat = (value) => new Intl.NumberFormat("fr-FR").format(value);
  return (
    <span className={styles.main} onClick={() => setHouseid(house.id)}>
      <p className={styles.sold}>
        {house.is_rental <= 0 ? "იყიდება" : "ქირავდება"}
      </p>
      <img src={house.image} alt="" className={styles.imageConteiner} />
      <div className={styles.conteiner}>
        <div className={styles.price}>
          <p className={styles.houseAddress}>{numberFormat(house.price)}</p>

          <span className={styles.address}>
            {" "}
            <img src={location} alt="" />
            <span>{house.address}</span>
          </span>
        </div>
        <div>
          <span className={styles.center}>
            <span className={styles.decoration}>
              <img src={bed} alt="" className={styles.svgImg} />
              <p>{house.bedrooms}</p>
            </span>
            <span className={styles.decoration}>
              <img src={vector} alt="" className={styles.svgImg} />
              <p>{house.area}მ&sup2;</p>
            </span>
            <span className={styles.decoration}>
              <img src={roadIcon} alt="" className={styles.svgImg} />
              <p>{house.zip_code}</p>
            </span>
          </span>
        </div>
      </div>
    </span>
  );
}

export default LayoutItem;
