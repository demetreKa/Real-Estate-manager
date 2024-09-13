/* eslint-disable react/prop-types */
import { useState } from "react";
import NavPage from "../Components/NavPage";

function LayoutElement({ data }) {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const handleRegionChange = (regionId) => {
    const isChecked = selectedRegions.includes(regionId);

    if (isChecked) {
      setSelectedRegions(selectedRegions.filter((id) => id !== regionId));
    } else {
      setSelectedRegions((selectedRegions) => [...selectedRegions, regionId]);
    }
  };
  // const filteredCities = data.filter((cityitem) => {
  //   return (
  //     selectedRegions.length === 0 ||
  //     selectedRegions.includes(cityitem.region_id)
  //   );
  // });
  return (
    <div>
      <NavPage
        data={data}
        handleRegionChange={handleRegionChange}
        selectedRegions={selectedRegions}
      />
    </div>
  );
}

export default LayoutElement;
// 1 [1 , 2]
