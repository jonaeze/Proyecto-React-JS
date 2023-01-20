import React from "react";
import "./styles.css";

const FilterMenuItem = ({ name, id, onFilter }) => {
  return (
    <div className="filter-menu-item">
      <button
        className="button-filter btn"
        id={id}
        onClick={() => onFilter(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default FilterMenuItem;
