/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LayoutItem from "./LayoutItem";
import styles from "./LayoutList.module.css";
function LayoutList({
  data,
  setHouseid,
  minArea,
  maxArea,
  minPrice,
  maxPrice,
  bedrooms,
  filteractive,
}) {
  return (
    <Link to="chosenHouse">
      <span>
        {filteractive && minArea > 0 ? `${minArea} -` : " "}
        {maxArea > 0 && maxArea > minArea && filteractive && maxArea < Infinity
          ? maxArea
          : " "}
      </span>
      <span>
        {filteractive && minPrice > 0 ? `${minPrice} -` : " "}
        {filteractive &&
        maxPrice > 0 &&
        maxArea > minPrice &&
        maxPrice < Infinity
          ? maxPrice
          : " "}
      </span>
      <span>{filteractive && bedrooms > 0 ? bedrooms : " "}</span>

      <div className={styles.conteiner}>
        {data.map((house) => (
          <LayoutItem key={house.id} house={house} setHouseid={setHouseid} />
        ))}
      </div>
    </Link>
  );
}

export default LayoutList;
