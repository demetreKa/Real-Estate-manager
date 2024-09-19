/* eslint-disable react/prop-types */
import { useState } from "react";
import CityList from "./CityList/CityList";
import styles from "./NavPage.module.css";
import DropDownComponent from "./DropDownComponent/DropDownComponent";
import AddListing from "./ListingAddBTN/AddListingBTN";
import AgentAdd from "./AgentAddBTN/AgentAdd";
import BedNumber from "./BedNumber/BedNumber";

function NavPage({
  data,
  handleRegionChange,
  selectedRegions,
  handleChange,
  minPirce,
  maxPrice,
  setFilteractive,
  minArea,
  maxArea,
}) {
  const [agentdrop, setAgentdrop] = useState(false);
  const [widthDrop, setWidthdrop] = useState(false);
  const [priceDrop, setPricedrop] = useState(false);
  const [regiondrop, setRegiondrop] = useState(false);
  const [beddrop, setBeddrop] = useState(false);

  function HandlePriceDown() {
    setPricedrop((drop) => !drop);
    setWidthdrop(false);
    setRegiondrop(false);
    setBeddrop(false);
  }
  function handleWidthDrop() {
    setWidthdrop((som) => !som);
    setPricedrop(false);
    setRegiondrop(false);
    setBeddrop(false);
  }
  function handleRegionDrop() {
    setRegiondrop((drop) => !drop);
    setWidthdrop(false);
    setPricedrop(false);
    setBeddrop(false);
  }
  function handleBedDrop() {
    setBeddrop((drop) => !drop);
    setPricedrop(false);
    setRegiondrop(false);
    setWidthdrop(false);
  }

  return (
    <div className={styles.nav}>
      <h1 className={styles.Logo}>RedBerry</h1>

      <ul>
        <CityList
          city={data}
          onRegionChange={handleRegionChange}
          selectedRegions={selectedRegions}
          handleRegionDrop={handleRegionDrop}
          regionDrop={regiondrop}
          onClick={setFilteractive}
        />
        <DropDownComponent
          header={"ფასის მიხედვით"}
          MinProperty={"მინ. ფასი"}
          MaxProperty={"მაქს. ფასი"}
          ButtonText={"საფასო კატეგორია"}
          onClick={handleWidthDrop}
          drop={widthDrop}
          minName={"minPrice"}
          maxName={"maxPrice"}
          action={handleChange}
          minVal={minPirce}
          maxVal={maxPrice}
          filterActivation={setFilteractive}
        />
        <DropDownComponent
          header={"ფართობის მიხედვით"}
          MinProperty={"მინ. ფართი"}
          MaxProperty={"მაქს. ფართი"}
          ButtonText={"ფართობი"}
          onClick={HandlePriceDown}
          drop={priceDrop}
          minName={"minArea"}
          maxName={"maxArea"}
          action={handleChange}
          minVal={minArea}
          maxVal={maxArea}
          filterActivation={setFilteractive}
        />
        <BedNumber onbedDrop={handleBedDrop} drop={beddrop} />
        <AddListing />
        <AgentAdd agentdrop={agentdrop} setAgentdrop={setAgentdrop} />
      </ul>
    </div>
  );
}

export default NavPage;
