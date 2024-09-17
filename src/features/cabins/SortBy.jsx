/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import Select from "../../ui/Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      onChange={handleChange}
      value={sortBy}
      options={options}
      type="white"
    />
  );
}

export default SortBy;
