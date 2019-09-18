import * as React from "react";
import * as _ from "lodash";

import { LocationGridItem, LocationItemProps } from "./LocationGridItem";
import { FilterValues } from "../FilterBar/index";

export interface LocationGridProps {
  className?: string;
  list: Array<LocationItemProps>;
  filters: FilterValues;
}

export const filterList = (
  list: Array<LocationItemProps>,
  filters: FilterValues
) => {
  return _.filter(list, (item: LocationItemProps) => {
    const isCategory =
      _.indexOf(filters.categories, item.categories[0].title) > -1;
    const isPrice = _.indexOf(filters.prices, item.price) > -1;
    const openState = filters.open === !item.is_closed;
    return isCategory && isPrice && openState;
  });
};

export const LocationGrid: React.FunctionComponent<LocationGridProps> = ({
  children,
  className,
  list,
  filters
}) => {
  const [filteredList, updateFilteredList] = React.useState(
    filterList(list, filters)
  );

  React.useEffect(() => {
    updateFilteredList(filterList(list, filters));
  }, [filters, list]);

  if (!filteredList.length) {
    return (
      <div className="location-grid location-grid--empty">
        <div className="col-12">
          <h3>0 of {list.length} Results Match Your Filter Criteria.</h3>
          <p>Try something else!</p>
        </div>
      </div>
    );
  }
  return (
    <div className="location-grid">
      {filteredList.map((entry: LocationItemProps, idx: number) => (
        <LocationGridItem key={idx} data={entry} />
      ))}
    </div>
  );
};
