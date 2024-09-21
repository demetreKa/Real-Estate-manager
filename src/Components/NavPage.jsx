/* eslint-disable react/prop-types */
import { useState } from "react";
import CityList from "./CityList/CityList";
import styles from "./NavPage.module.css";
import DropDownComponent from "./DropDownComponent/DropDownComponent";
import AddListing from "./ListingAddBTN/AddListingBTN";
import AgentAddBTN from "./AgentAddBTN/AgentAdd";
import BedNumber from "./BedNumber/BedNumber";
import Logo from "./icon/Logo.svg";
function NavPage({
  data,
  handleRegionChange,
  selectedRegions,
  handleChange,
  minPrice,
  maxPrice,
  setFilteractive,
  minArea,
  maxArea,
  numberOfBeds,
  setNumberOFbeds,
  showCard,
  agentdrop,
  setAgentdrop,
  setMaxPrice,
  setMinPrice,
  setMaxArea,
  setMinArea,
}) {
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
    setRegiondrop((prev) => !prev);
    console.log(regiondrop);
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
    <>
      <div className={styles.nav}>
        <img src={Logo} className={styles.Logo} />

        <ul>
          <CityList
            city={data}
            onRegionChange={handleRegionChange}
            selectedRegions={selectedRegions}
            handleRegionDrop={handleRegionDrop}
            regionDrop={regiondrop}
            onClick={setFilteractive}
            showCard={showCard}
            setRegiondrop={setRegiondrop}
          />

          <DropDownComponent
            header={"ფასის მიხედვით"}
            MinProperty={"მინ. ფასი"}
            MaxProperty={"მაქს. ფასი"}
            ButtonText={"საფასო კატეგორია"}
            onClick={handleWidthDrop}
            setDrop={setWidthdrop}
            drop={widthDrop}
            minName={"minPrice"}
            maxName={"maxPrice"}
            action={handleChange}
            minVal={minPrice}
            maxVal={maxPrice}
            filterActivation={setFilteractive}
            showCard={showCard}
            style={"PriceDrop"}
            onEvent={setMinPrice}
            onMaxEvent={setMaxPrice}
          />
          <DropDownComponent
            header={"ფართობის მიხედვით"}
            MinProperty={`მინ. ფართი`}
            MaxProperty={"მაქს. ფართი"}
            ButtonText={"ფართობი"}
            onClick={HandlePriceDown}
            drop={priceDrop}
            minName={"minArea"}
            maxName={"maxArea"}
            setDrop={setPricedrop}
            action={handleChange}
            minVal={minArea}
            maxVal={maxArea}
            filterActivation={setFilteractive}
            showCard={showCard}
            style={"AreaDrop"}
            onEvent={setMinArea}
            onMaxEvent={setMaxArea}
          />

          <BedNumber
            onbedDrop={handleBedDrop}
            setBeddrop={setBeddrop}
            drop={beddrop}
            numberOfBeds={numberOfBeds}
            setNumberOFbeds={setNumberOFbeds}
            filterActivation={setFilteractive}
            showCard={showCard}
            handleChange={handleChange}
          />
          <AddListing />
          <AgentAddBTN agentdrop={agentdrop} setAgentdrop={setAgentdrop} />
        </ul>
      </div>
    </>
  );
}

export default NavPage;
