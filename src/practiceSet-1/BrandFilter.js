import { useState } from "react";
export const BrandFilter = () => {
  const brands1 = [
    { id: "0a", brandName: "puma" },
    { id: "0b", brandName: "adiddas" },
    { id: "0c", brandName: "wildcraft" },
    { id: "0d", brandName: "levis" },
    { id: "0e", brandName: "celio" }
  ];
  const [searchFilter, setSearcgFilter] = useState("");
  return (
    <div>
      <input
        placeholder="search products"
        value={searchFilter}
        onChange={(e) => setSearcgFilter(e.target.value)}
      />

      {brands1
        .filter((brand) => {
          if (searchFilter === "") {
            return brand;
          } else if (
            brand.brandName.toLowerCase().includes(searchFilter.toLowerCase())
          ) {
            return brand;
          }
        })
        .map((brand) => {
          return <li key={brand.id}>{brand.brandName}</li>;
        })}
    </div>
  );
};
