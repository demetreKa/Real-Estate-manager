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
  }
  function handlefilterClick() {
    setFilteractive(true);
  }

  const filteredData = filteractive
    ? data.filter((item) => {
        if (minPrice !== 0 && !priceWithinRange(item.price)) {
          return false;
        }

        if (minArea !== 0 && !areaWithinRange(item.area)) {
          return false;
        }

        if (numberOfBeds !== 0 && !bedsinRange(item.bedrooms)) {
          return false;
        }

        return regionMatches(item.city.region_id);
      })
    : data;

  function priceWithinRange(price) {
    return minPrice <= price && maxPrice >= price;
  }

  function areaWithinRange(area) {
    return minArea <= area && maxArea >= area;
  }

  function bedsinRange(bedrooms) {
    return numberOfBeds <= bedrooms && bedrooms <= numberOfBeds;
  }

  function regionMatches(regionId) {
    return selectedRegions.length === 0 || selectedRegions.includes(regionId);
  }
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
        {filteredData.length !== 0 ? (
          <LayoutList
            data={filteredData}
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
