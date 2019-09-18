import * as React from "react";
import * as _ from "lodash";

import Dropdown from "../Dropdown";
import Checkbox from "../Checkbox";
import OpenToggleInput from "../OpenToggleInput";

export interface ChangeEventObject {
  name: string;
  value: boolean;
}

export interface FilterValues {
  open: boolean;
  prices: Array<string>;
  categories: Array<string>;
}

export interface FilterBarProps {
  categories: Array<string>;
  prices: Array<string>;
  onUpdate: (name: string, changes: ChangeEventObject) => void;
  values: FilterValues;
}

export const FILTER_DEFAULT: FilterValues = {
  prices: [],
  categories: [],
  open: true
};

export const FilterBar: React.FunctionComponent<FilterBarProps> = ({
  categories,
  prices,
  onUpdate,
  values = FILTER_DEFAULT
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-bar__inline-label">Filter By: </div>
      <div className="filter-bar__inline-input">
        <OpenToggleInput
          className="filter-bar__open-toggle-input"
          id="open-toggle"
          name="is-open"
          checked={values.open}
          onChange={value => onUpdate("open", value)}
        />
      </div>
      <div className="filter-bar__inline-input">
        <Dropdown name="Price" className="filter-bar__price-dropdown-input">
          {prices.map((price: string, idx: number) => (
            <Checkbox
              name={price}
              key={`price-${idx}`}
              id={`price-${idx}`}
              label={price}
              onChange={value => onUpdate("price", value)}
              checked={_.indexOf(values.prices, price) > -1}
            />
          ))}
        </Dropdown>
      </div>
      <div className="filter-bar__inline-input">
        <Dropdown
          name="Categories"
          className="filter-bar__category-dropdown-input"
        >
          {categories.map((category: string, idx: number) => (
            <Checkbox
              name={category}
              key={`category-${idx}`}
              id={`category-${idx}`}
              label={category}
              onChange={value => onUpdate("categories", value)}
              checked={_.indexOf(values.categories, category) > -1}
            />
          ))}
        </Dropdown>
      </div>
    </div>
  );
};
