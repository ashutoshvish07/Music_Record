import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("genre");
  const initialSortParams = searchParams.get("sortBy");
  const [category, setCategory] = useState(initialGenreParams || []);

  const [sortBy, setsortBy] = useState(initialSortParams || "");

  const handleGenreChange = (e) => {
    const option = e.target.value;
    // if option present in category ,remove it,
    // else add it on the array
    const newCategory = [...category];

    if (category.includes(option)) {
      // remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      // add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setsortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      setSearchparams({ genre: category, sortBy: sortBy });
    }
  }, [category, setSearchparams, sortBy]);

  console.log(sortBy);
  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input
          type="checkbox"
          value="K-Pop"
          defaultChecked={category.includes("K-Pop")}
          onChange={handleGenreChange}
        />
        <label> K-Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Country"
          defaultChecked={category.includes("Country")}
          onChange={handleGenreChange}
        />
        <label> Country</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Pop"
          defaultChecked={category.includes("Pop")}
          onChange={handleGenreChange}
        />
        <label>Pop</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="Holiday"
          defaultChecked={category.includes("Holiday")}
          onChange={handleGenreChange}
        />
        <label> Holiday</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="Heavy Metal"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleGenreChange}
        />
        <label>Heavy Metal</label>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSort}>
        <div>
          <input type="radio" defaultChecked={sortBy ==="asc"} name="sortBy" value="asc" />
          <label>Ascending</label>
        </div>
        <div>
          <input type="radio" defaultChecked={sortBy ==="desc"} name="sortBy" value="desc" />
          <label>Decending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
