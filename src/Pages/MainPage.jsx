/* eslint-disable react/prop-types */
import { useState } from "react";
import NavPage from "../Components/NavPage";
import styles from "./MainPage.module.css";
import LayoutList from "../Components/Layout/LayoutList";
import AgentAddForm from "../Components/AgentAddForm/AgentAddForm";
function MainPage({ data, setHouseid }) {
  const [agentdrop, setAgentdrop] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(Infinity);
  const [numberOfBeds, setNumberOFbeds] = useState(0);
  const [filteractive, setFilteractive] = useState(false);

  const handleRegionChange = (regionId) => {
    const isChecked = selectedRegions.includes(regionId);

    if (isChecked) {
      setSelectedRegions(selectedRegions.filter((id) => id !== regionId));
    } else {
      setSelectedRegions((selectedRegions) => [...selectedRegions, regionId]);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(parseFloat(value) || 0);
    } else if (name === "maxPrice") {
      setMaxPrice(parseFloat(value) || 0);
    } else if (name === "minArea") {
      setMinArea(parseFloat(value) || 0);
    } else if (name === "maxArea") {
      setMaxArea(parseFloat(value) || 0);
    }
    if (
      maxPrice === 0 ||
      (minPrice > maxPrice && maxPrice === Infinity) ||
      minPrice === 0 ||
      maxArea === 0 ||
      minArea > maxArea ||
      minArea === 0
    ) {
      setFilteractive(false);
    }
  }
  function handlefilterClick() {
    setFilteractive(true);
  }

  const filteredCities = filteractive
    ? data.filter((cityitem) => {
        console.log(cityitem.price, cityitem.area, cityitem.bedrooms);
        const bedsinRange =
          cityitem.bedrooms >= numberOfBeds &&
          cityitem.bedrooms <= numberOfBeds;
        console.log(cityitem.bedrooms == numberOfBeds);
        const priceWithinRange =
          minPrice >= cityitem && cityitem.price <= maxPrice;
        const widthWithinRange =
          cityitem.area >= minArea && cityitem.area <= maxArea;
        const regionMatches =
          selectedRegions.length === 0 ||
          selectedRegions.includes(cityitem.city.region_id);

        return (
          priceWithinRange && regionMatches && widthWithinRange && bedsinRange
        );
      })
    : data;

  return (
    <>
      <div className={agentdrop ? styles.diactivated : styles.conteiner}>
        <NavPage
          data={data}
          handleRegionChange={handleRegionChange}
          selectedRegions={selectedRegions}
          handleChange={handleChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          minArea={minArea}
          maxArea={maxArea}
          setFilteractive={handlefilterClick}
          numberOfBeds={numberOfBeds}
          setNumberOFbeds={setNumberOFbeds}
          agentdrop={agentdrop}
          setAgentdrop={setAgentdrop}
        />
        {filteredCities.length !== 0 ? (
          <LayoutList
            data={filteredCities}
            setHouseid={setHouseid}
            minArea={minArea}
            maxArea={maxArea}
            minPrice={minPrice}
            maxPrice={maxPrice}
            bedrooms={numberOfBeds}
            filteractive={filteractive}
          />
        ) : (
          "აღნიშნული მონაცემებით განცხადება არ მოგიძებნება"
        )}
      </div>
      {agentdrop ? (
        <AgentAddForm setAgentdrop={setAgentdrop} agentdrop={agentdrop} />
      ) : (
        " "
      )}
    </>
  );
}

export default MainPage;
// 1 [1 , 2]
