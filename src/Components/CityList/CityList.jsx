/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
const REGIONS = [
  { id: 1, name: "ქართლი" },
  { id: 2, name: "კახეთი" },
  { id: 3, name: "იმერეთი" },
  { id: 4, name: "სამეგრელო" },
  { id: 5, name: "გურია" },
  { id: 6, name: "რაჭა" },
  { id: 7, name: "ლეჩხუმი" },
  { id: 8, name: "სამცხე-ჯავახეთი" },
  { id: 9, name: "აჭარა" },
  { id: 10, name: "სვანეთი" },
  { id: 11, name: "მცხეთა-მთიანეთი" },
  { id: 12, name: "თბილისი" },
  // ... more regions
];
function CityList({ onRegionChange, selectedRegions }) {
  return (
    <div>
      <div className={styles.gridDropDown}>
        {REGIONS.map((region) => (
          <div key={region.id}>
            <input
              type="checkbox"
              value={region.id}
              checked={selectedRegions.includes(region.id)}
              onChange={() => onRegionChange(region.id)}
            />
            <label htmlFor={region.id}>{region.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityList;
