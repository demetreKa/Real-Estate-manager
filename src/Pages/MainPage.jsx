/* eslint-disable react/prop-types */
import { useState } from "react";
import NavPage from "../Components/NavPage";
import styles from "./MainPage.module.css";
import LayoutList from "../Components/Layout/LayoutList";
function MainPage({ data }) {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(Infinity);
  // const [numberOfBeds, setNumberOFbeds] = useState(10);
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
        if (minPrice === 0 && maxPrice === 0) {
          return;
        } else {
          const priceWithinRange =
            cityitem.price >= minPrice && cityitem.price <= maxPrice;
          const widthWithinRange =
            cityitem.area >= minArea && cityitem.area <= maxArea;
          const regionMatches =
            selectedRegions.length === 0 ||
            selectedRegions.includes(cityitem.city.region_id);
          return priceWithinRange && regionMatches && widthWithinRange;
        }
      })
    : data;

  return (
    <div className={styles.conteiner}>
      <NavPage
        data={data}
        handleRegionChange={handleRegionChange}
        selectedRegions={selectedRegions}
        handleChange={handleChange}
        minPirce={minPrice}
        maxPrice={maxPrice}
        minArea={minArea}
        maxArea={maxArea}
        setFilteractive={handlefilterClick}
      />
      {filteredCities.length !== 0 ? (
        <LayoutList data={filteredCities} />
      ) : (
        "აღნიშნული მონაცემებით განცხადება არ მოგიძებნება"
      )}
    </div>
  );
}

export default MainPage;
// 1 [1 , 2]
