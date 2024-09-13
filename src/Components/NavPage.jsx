/* eslint-disable react/prop-types */
// import { useState } from "react";
import CityList from "./CityList/CityList";
import styles from "./NavPage.module.css";
// import DropDownComponent from "./DropDownComponent/DropDownComponent";

function NavPage({ data, handleRegionChange }) {
  // const [widthDrop, setWidthdrop] = useState(false);
  // const [priceDrop, setPricedrop] = useState(false);

  // function HandlePriceDown() {
  //   setPricedrop((drop) => !drop);
  //   setWidthdrop(false);
  // }
  // function handleWidthDrop() {
  //   setWidthdrop((som) => !som);
  //   setPricedrop(false);
  // }

  return (
    <div className={styles.nav}>
      <h1 className={styles.Logo}>RedBerry</h1>
      {/* <ul>
        <DropDownComponent
          header={"ფასის მიხედვით"}
          MinProperty={"მინ. ფასი"}
          MaxProperty={"მაქს. ფასი"}
          ButtonText={"საფასო კატეგორია"}
          onClick={handleWidthDrop}
          drop={widthDrop}
          margin={"265px"}
        />
        <DropDownComponent
          header={"ფართობის მიხედვით"}
          MinProperty={"მინ. ფართი"}
          MaxProperty={"მაქს. ფართი"}
          ButtonText={"ფართობი"}
          onClick={HandlePriceDown}
          drop={priceDrop}
        />
      </ul> */}
      <CityList city={data} onRegionChange={handleRegionChange} />
    </div>
  );
}

export default NavPage;
