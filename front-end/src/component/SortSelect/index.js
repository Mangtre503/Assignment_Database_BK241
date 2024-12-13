import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { GoSearch } from "react-icons/go";
import React from "react";
import { FaSortAmountUp } from "react-icons/fa";
import { FiChevronsDown } from "react-icons/fi";

const SortSelect = ({
  item,
  index,
  sortList,
  listItems,
  handleFilterChange,
  filters,
}) => {
  return (
    <div className="sort-item">
      {index !== sortList.length - 1 && index !== sortList.length - 2 ? (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filters[Object.keys(filters)[index]] || ""}
          name={Object.keys(filters)[index]}
          onChange={(event) =>
            handleFilterChange(Object.keys(filters)[index], event.target.value)
          }
          sx={{
            width: "170px",
            fontFamily: "Itim",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
          displayEmpty
          IconComponent={
            index === sortList.length - 2 ? FaSortAmountUp : FiChevronsDown
          }
        >
          <MenuItem value={""} sx={{ background: "#E0BBE4 !important" }}>
            {item}
          </MenuItem>
          {Object.keys(filters)[index] === "subjectName"? 
          <MenuItem value={"ALL"} sx={{ background: "#E0BBE4 !important" }}>
            {"Tat ca"}
          </MenuItem> : <></>}
          {console.log(Object.values(listItems).at(index))}
          {Object.values(listItems)
            .at(index)
            .map((it) => (
              <MenuItem
                value={it.name}
                sx={{ background: "#E0BBE4 !important" }}
              >
                {it.name}
              </MenuItem>
            ))}
        </Select>
      ) : index === sortList.length - 2 ? (
        <h4
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          {item}
          <FaSortAmountUp />
        </h4>
      ) : (
        <h4 style={{ display: "flex", alignItems: "center" }}>
          <input placeholder={item} style={{ all: "unset" }} />
          <GoSearch />
        </h4>
      )}
    </div>
  );
};

export default SortSelect;
